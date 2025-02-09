declare enum AppointmentType {
    InitialConsultation = 'Initial Consultation',
    Standard = 'Standard',
    CheckIn = 'Check-In'
}

declare interface Appointment {
    id: string,
    type: AppointmentType,
    startTime: Date,
    endTime: Date,
    patientName: string
}