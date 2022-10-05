# Jane Coding Exercise

Hey there 👋 we're excited that you're considering joining our mission to help the helpers!

The goal of this exercise is to evaluate your coding style, OO design skills, code efficiency, use of data structures, and functional completeness.

We are looking for:

- Ability to write code to solve an abstract problem.
- Clear, consistent and idiomatic coding style.
- Use of appropriate design patterns, data structures and algorithms.
- Efficiency of the solution.
- Approach to automated testing.
- PR write up
  - Documentation / README.
  - Code changes in commits and commit messages.

You may choose Ruby, Java, C# or Python to complete the solution.

Your code should include a set of unit tests. You do not need to include a database, console application or GUI. The unit tests are all that is required.

Code should be submitted in a Git repository with clear documentation on how to run the tests. Feel free to specify any assumptions that you’ve made, along with any missing details that would complete the solution. Please open a pull request within this repo once you're happy with your solution.

If you require further clarification, then please do not hesitate to ask.

## Clinic Scheduling application

Your job is to design and implement the core components of an on-line scheduling application for a physiotherapy clinic. The clinic has the following business rules:

- The clinic is open from 9am until 5pm.
- The clinic currently has 3 practitioners on staff.
- The clinic offers three types of appointments, a 90 minutes initial consultation, standard 60 minute appointments and 30 minute check-ins.
- Patients book with a specific practitioner.
- Practitioners can only see a single patient at any time.
- Appointments start on the hour or half-hour.
- Bookings can only be made for appointments that start and end within the clinic hours.
- Bookings cannot be made within 2 hours of the appointment start time.

**The application MVP will:**

- Provide the patient with a list of available appointment times. Inputs are the appointment type and a date, either today or in the future. The 2 hour booking deadline applies for today’s appointments.
- Allow the patient to book an appointment.
- Provide the practitioner with a list of scheduled appointments for the current day.
