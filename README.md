# Clinic Scheduling Appointment

Thi is a clinic scheduling application that allows patients to book appointments and practitioners to view scheduled appointments

## Setup
1. Install Bun `curl -fsSL https://bun.sh/install | bash`

## Run tests
1. Clone Repositiory
2. Install dependencies: `bun install`
3. Run tests: `bun test`

## Code Structure
- `src/scheduler.ts`: Contains the `Scheduler` class
- `tests/schedular.ts`: Conatains unit tests for the `Scheduler` class
- `types/Appointment.ts`: Contains `Appointment` interface/enum for `Scheduler` class