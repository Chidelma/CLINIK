export enum AppointmentType {
    InitialConsultation = 'Initial Consultation',
    Standard = 'Standard',
    CheckIn = 'Check-In'
}

export interface Appointment {
    id: string,
    type: AppointmentType,
    startTime: Date,
    endTime: Date,
    patientName: string
}