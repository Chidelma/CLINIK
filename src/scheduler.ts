export class Scheduler {

    private appointments: Appointment[] = []

    constructor(openingTime: Date, closingTime: Date) {}

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

    getScheduledAppointment(date: Date): Appointment[] {

        return this.appointments.filter(appt => 
            appt.startTime.toDateString() === date.toDateString()
        )
    }

    private isTimeSlotAvailable(startTime: Date, endTime: Date): boolean {

        return !this.appointments.some(appt => 
            (startTime >= appt.startTime && startTime < appt.endTime) ||
            (endTime > appt.startTime && endTime < appt.endTime) ||
            (startTime <= appt.startTime && endTime >= appt.endTime)
        )
    }

    getAvailableAppointments(type: AppointmentType, date: Date): Date[] {

        const availableSlots: Date[] = []

        const duration = this.getAppointmentDuration(type)

        let currentTime = new Date(date)

        currentTime.setHours(9, 0, 0, 0)

        while(currentTime.getHours() < 17) {
            
            const endTime = new Date(currentTime.getTime() + duration * 60000)

            if(endTime.getHours() > 17) break

            if(this.isTimeSlotAvailable(currentTime, endTime)) {
                availableSlots.push(new Date(currentTime))
            }

            currentTime = new Date(currentTime.getTime() + 30 * 60000)
        }

        return availableSlots
    }

    bookAppointments(type: AppointmentType, startTime: Date, patientName: string): Appointment | null {

        const duration = this.getAppointmentDuration(type) 

        const endTime = new Date(startTime.getTime() + duration + 60000)

        if(!this.isTimeSlotAvailable(startTime, endTime)) return null

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