import { Scheduler } from "../src/scheduler.js";
import { beforeEach, describe, expect, test } from 'bun:test'
import { AppointmentType } from "../types/Appointment.js";

describe('Scheduler', () => {

    let scheduler: Scheduler
    
    const openingTime = new Date()
    const closingTime = new Date()

    // Set Opening and Closing time for Clinic
    openingTime.setHours(9, 0, 0, 0)
    closingTime.setHours(17, 0, 0, 0)

    // Instanitate scheduler instance for each test
    beforeEach(() => scheduler = new Scheduler(openingTime, closingTime))

    const nextClinicDayAt = (hour: number, minute = 0) => {

        const date = new Date()

        date.setDate(date.getDate() + 1)
        date.setHours(hour, minute, 0, 0)

        return date
    }

    test("Time within Clinic Hours", () => {

        const time = new Date()

        time.setHours(10, 0, 0, 0)

        expect(Scheduler.isWithinClincHours(time, openingTime, closingTime)).toBe(true)
    })

    test("Time Not within Clinc Hours", () => {

        const time = new Date()

        time.setHours(8, 0, 0, 0) // 8 AM

        expect(Scheduler.isWithinClincHours(time, openingTime, closingTime)).toBe(false)

        time.setHours(18, 0, 0, 0) // 6 PM

        expect(Scheduler.isWithinClincHours(time, openingTime, closingTime)).toBe(false)
    })

    test("Bookings more than 2 hours", () => {

        const now = new Date()

        const laterTime = new Date(now.getTime() + 3 * 60 * Scheduler.minute)

        expect(Scheduler.isBookingAllowed(laterTime)).toBe(true)
    })

    test("Bookings within 2 hours", () => {

        const now = new Date()

        const withinTime = new Date(now.getTime() + 1 * 60 * Scheduler.minute)

        expect(Scheduler.isBookingAllowed(withinTime)).toBe(false)
    })

    test('Available Appointments Slots', () => {

        const date = nextClinicDayAt(10)

        const availableSlots = scheduler.getAvailableAppointments(AppointmentType.Standard, date)

        expect(availableSlots.length).toBeGreaterThan(0)
    })

    test('Appointment Booking', () => {

        const date = nextClinicDayAt(10)

        const appointment = scheduler.bookAppointments(AppointmentType.Standard, date, 'Samuel')

        expect(appointment).not.toBeNull()
        expect(appointment?.patientName).toBe('Samuel')
    })

    test('Overlapping Appointments', () => {

        const date = nextClinicDayAt(10)

        scheduler.bookAppointments(AppointmentType.Standard, date, 'Samuel')

        const overlap = scheduler.bookAppointments(AppointmentType.CheckIn, date, 'Samuel')

        expect(overlap).toEqual(null)
    })

    test('Scheduled Appointments for the day', () => {

        const date = nextClinicDayAt(10)

        scheduler.bookAppointments(AppointmentType.Standard, date, 'Samuel')

        const appointments = scheduler.getScheduledAppointments(date)

        expect(appointments.length).toEqual(1)
    })
})
