# Jane Coding Exercise

Hey there 👋 we're excited that you're considering joining our mission to help the helpers!

The goal of this exercise is to evaluate your coding style, code design skills, code efficiency, use of data structures and clarity of your tests.

We are looking for:

- Ability to write code to solve an abstract problem.
- Clear, consistent and idiomatic coding style.
- Use of appropriate design patterns, data structures and algorithms.
- Efficiency of the solution.
- Approach to automated testing.
- PR write up
  - Documentation / README.
  - Code changes in commits and commit messages.

You may choose Ruby, Java, C#, Go or Python to complete the solution.

Your code should include a set of unit tests. You do not need to include a database, console application or GUI. The unit tests are all that is required.

Code should be submitted in a Git repository with clear documentation on how to run the tests. Feel free to specify any assumptions that you’ve made, along with any missing details that would complete the solution.

Please open a pull request within this repo once you're happy with your solution.

If you require further clarification, then please do not hesitate to ask.

## Clinic Scheduling application

Your job is to design and implement the core components of an on-line scheduling application for a physiotherapy clinic. The clinic has the following business rules:

- The clinic is open from 9am until 5pm.
- The clinic offers three types of appointments, a 90 minutes initial consultation, standard 60 minute appointments and 30 minute check-ins.
- Appointments do not overlap. There can only be one booked appointment at any time.
- Appointments start on the hour or half-hour.
- Bookings can only be made for appointments that start and end within the clinic hours.
- Bookings cannot be made within 2 hours of the appointment start time.

**The application MVP will:**

- Provide the patient with a list of available appointment times. Inputs are the appointment type and a date, either today or in the future. The 2 hour booking deadline applies for today’s appointments.
- Allow the patient to book an appointment.
- Provide the practitioner with a list of scheduled appointments for the current day.

## Tips for Initial Project Setup
To speed up start on your project you can use steps below to set up your project

### Ruby

* Ensure you have a recent version of Ruby and Bundler installed (`ruby -v` and `bundle -v` from command line to verify).
* Specify any gem dependencies you will use in a `Gemfile` in your project's root (https://bundler.io/)
* Use a testing framework of your choice. RSpec and Minitest are common choices:
  * https://rspec.info/
  * https://github.com/minitest/minitest
* Add your application code in an `./app/` directory inside your project root.
* Add your tests in whatever directory is appropriate for your testing tool of choice (`./tests/` or `./spec/` for example)
* Provide instructions as to how to run your tests
* No UI, frameworks, or datastores are required - only your application code and tests that exercise it.

### Java

* Ensure you have a recent version of the Java SDK installed on your system (`java -version` and `javac -version` from command line to verify)
* Use a testing framework of your choice, such as JUnit.
* Use a dependency management / build system such as Apache Maven or Gradle to declare any dependencies for your submission.
* Add your source code and tests wherever is appropriate for your build tool of choice (for example `./src/main/java` and `./src/test/java` plus appropriate directories for your package structure if using Apache Maven).
* Feel free to add any extra dependencies you feel are necessary.
* No UI, frameworks, or datastores are required - only your application code and tests that exercise it.
* Provide clear instructions on retrieving dependencies, compiling your code and executing your tests. For example, if using Apache Maven: 'To compile the code for this submission and execute the tests, please run `mvn clean test` from the directory containing the `pom.xml` file'.

### C#
Example set up using .NET (core). Whether you decide to set up the app manually or using the console:
* Feel free to add more library projects and any `nuget` packages you find necessary.
* You do NOT need to add WEB API or console application projects.
* Please commit your scaffolding before you start implementing your exercise

#### Manual set up
* Create a solution with a class library project where you will implement the requirements.
* Add a test project referencing your library project using your favourite testing framework (for example nUnit, xUnit, MSTest).

#### Alternative console setup
* You can run script below in `Clinic.Scheduling` directory to create `Clinic.Scheduling` solution with class library and `xUnit` test project.
  ```
  dotnet new sln
  dotnet new classlib -n Clinic.Scheduling
  dotnet new list xUnit
  dotnet new xunit -n Clinic.Scheduling.Test
  dotnet sln add Clinic.Scheduling/Clinic.Scheduling.csproj
  dotnet sln add Clinic.Scheduling.Test/Clinic.Scheduling.Test.csproj
  dotnet add Clinic.Scheduling.Test/Clinic.Scheduling.Test.csproj reference Clinic.Scheduling/Clinic.Scheduling.csproj
  ```
* You can verify the tests run with `dotnet test`
* Note: you can swap `xUnit` for `nUnit` in script above if you prefer to use `nUnit`

### Python
Example set up using Python (3.11). Feel free to set up the Python project however you like,
however, make sure that it is reproducible on our end.

You are free to add additional libraries, like `pytest`, or change how the source code is stored, this is just a minimal set up.

```
virtualenv -p python3.11 clinic_scheduling
cd clinic_scheduling
source bin/activate
mkdir tests
```

At this point you can create folders for packages at the project top-level and then write tests for them under the
tests directory using the built-in `unittest` package.

You can run these tests using `python -m unittest tests/**/*.py`.

### Go
Example setup using Go. You may setup the project anyway you like. These are a few commands you can use to get setup with a basic Go package for your assignment. The following assumes you have Go installed.

Unix based systems or Windows Powershell
```
mkdir -p ~/jane-assignment/cmd
cd ~/jane-assignment
go mod init jane-assignment
```

You can now create your main file and any additional folders for your assignment. You may add additional Go packages to 
your project, if you find them useful in completing your assignment. Additional packages are optional and not a 
requirement. 

* Makes use of `go fmt` to reformat your Go code. 
