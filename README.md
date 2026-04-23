# CLINIK Scheduling Assessment

Clinic scheduling logic for booking appointments, checking availability, and returning valid appointment slots for different consultation types.

## Goal

This repo focuses on the scheduling domain rather than a full web application. The core behavior lives in a scheduler service with tests that exercise booking constraints and appointment durations.

## Requirements

- [Bun](https://bun.sh/)

## Setup

```bash
bun install
```

## Validation

```bash
bun test
```

## Code Structure

- `src/scheduler.ts`: scheduler implementation and booking rules.
- `tests/`: unit tests for scheduling behavior.
- `types/Appointment.ts`: appointment contracts and enums.
