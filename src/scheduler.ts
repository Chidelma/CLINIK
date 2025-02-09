import { Appointment, AppointmentType } from "../types/Appointment.js"

export class Scheduler {

    private appointments: Appointment[] = []
    private openingTime: Date
    private closingTime: Date
    static readonly minute = 60000

    constructor(openingTime: Date, closingTime: Date) {
        this.openingTime = openingTime
        this.closingTime = closingTime
    }

    /**
     * Checks if a given time is within clinic hours.
     * @param {Date} time - The time to check.
     * @returns {boolean} True if the time is within clinic hours, false otherwise.
     */

    static isWithinClincHours(time: Date, openingTime: Date, closingTime: Date): boolean {
        return time >= openingTime && time < closingTime
    }

    /**
     * Checks if a booking is allowed based on the 2-hour booking deadline.
     * @param {Date} startTime - The proposed start time of the appointment.
     * @returns {boolean} True if booking is allowed, false otherwise.
     */
    static isBookingAllowed(startTime: Date): boolean {

        const now = new Date()

        const bookingDeadline = new Date(now.getTime() + 2 * 60 * Scheduler.minute)

        return startTime >= bookingDeadline
    }

     /**
     * Returns the duration of an appointment based on its type.
     * @param {AppointmentType} type - The type of the appointment.
     * @returns {number} The duration of the appointment in minutes.
     * @throws {Error} If the appointment type is invalid.
     */
    private getAppointmentDuration(type: AppointmentType): number {

        switch(type) {
            case AppointmentType.InitialConsultation:
                return 90
            case AppointmentType.Standard:
                return 60
            case AppointmentType.CheckIn:
                return 30
            default:
                throw new Error('Invalid appointment type')
        }
    }

    /**
     * Retrieves all scheduled appointments for a specific date.
     * @param {Date} date - The date for which to retrieve appointments.
     * @returns {Appointment[]} An array of appointments scheduled for the given date.
     */
    getScheduledAppointments(date: Date): Appointment[] {

        return this.appointments.filter(appt => 
            appt.startTime.toDateString() === date.toDateString()
        )
    }

    /**
     * Checks if a time slot is available for booking.
     * @param {Date} startTime - The start time of the proposed appointment.
     * @param {Date} endTime - The end time of the proposed appointment.
     * @returns {boolean} True if the time slot is available, false otherwise.
     */
    private isTimeSlotAvailable(startTime: Date, endTime: Date): boolean {

        return !this.appointments.some(appt => 
            (startTime >= appt.startTime && startTime < appt.endTime) ||
            (endTime > appt.startTime && endTime < appt.endTime) ||
            (startTime <= appt.startTime && endTime >= appt.endTime)
        )
    }

    /**
     * Retrieves available appointment slots for a specific date and appointment type.
     * @param {AppointmentType} type - The type of the appointment.
     * @param {Date} date - The date for which to retrieve available slots.
     * @returns {Date[]} An array of available appointment start times.
     */
    getAvailableAppointments(type: AppointmentType, date: Date): Date[] {

        const availableSlots: Date[] = []

        const duration = this.getAppointmentDuration(type)

        let currentTime = new Date(date)

        currentTime.setHours(9, 0, 0, 0)

        while(currentTime.getHours() < 17) {
            
            const endTime = new Date(currentTime.getTime() + duration * Scheduler.minute)

            if(endTime.getHours() > 17) break

            if(this.isTimeSlotAvailable(currentTime, endTime) && 
                Scheduler.isWithinClincHours(currentTime, this.openingTime, this.closingTime) &&
                Scheduler.isBookingAllowed(currentTime)) {

                    availableSlots.push(new Date(currentTime))
            }

            currentTime = new Date(currentTime.getTime() + 30 * Scheduler.minute)
        }

        return availableSlots
    }

    /**
     * Books an appointment if the time slot is available.
     * @param {AppointmentType} type - The type of the appointment.
     * @param {Date} startTime - The start time of the appointment.
     * @param {string} patientName - The name of the patient booking the appointment.
     * @returns {Appointment | null} The booked appointment object if successful, otherwise null.
     */
    bookAppointments(type: AppointmentType, startTime: Date, patientName: string): Appointment | null {

        const duration = this.getAppointmentDuration(type) 

        const endTime = new Date(startTime.getTime() + duration + Scheduler.minute)

        if(!this.isTimeSlotAvailable(startTime, endTime) ||
            !Scheduler.isWithinClincHours(startTime, this.openingTime, this.closingTime) ||
            !Scheduler.isBookingAllowed(startTime)) return null

        const appointment: Appointment = {
            id: Bun.randomUUIDv7(),
            type,
            startTime,
            endTime,
            patientName
        }

        this.appointments.push(appointment)

        return appointment
    }
}