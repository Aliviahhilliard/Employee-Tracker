# Employee Database Management CLI Application

This command-line application is designed to help business owners manage their company's employee database efficiently. It provides a user-friendly interface for viewing and managing departments, roles, and employees. Below are the details of this application:

## Installation

Before running the application, make sure you have installed Node.js and MySQL on your system. Then, use the following command to install the required dependencies:

```bash
npm install inquirer@8.2.4
npm install mysql
```

## Usage

To start the application, run the following command:

```bash
node index.js
```

You will be presented with a menu of options to choose from:

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee's role

## User Story

As a business owner, I want to be able to view and manage the departments, roles, and employees in my company so that I can organize and plan my business effectively.

## Acceptance Criteria

- When you start the application, you will see a menu with various options.
- Selecting "View all departments" will display a formatted table with department names and IDs.
- Selecting "View all roles" will display job titles, role IDs, department names, and salaries.
- Choosing "View all employees" will show a formatted table with employee data, including IDs, first names, last names, job titles, departments, salaries, and managers.
- Selecting "Add a department" allows you to enter the name of a department, which will be added to the database.
- Choosing "Add a role" prompts you to enter the name, salary, and department for the new role, which will be added to the database.
- Selecting "Add an employee" prompts you to enter the employee's first name, last name, role, and manager, and the employee will be added to the database.
- If you choose "Update an employee role," you will be prompted to select an employee and their new role, and this information will be updated in the database.

## Walkthrough Video

To see the functionality of this application in action, please watch the [walkthrough video](insert_link_to_video_here).

---

This Employee Database Management CLI Application simplifies the task of managing your company's employee information. If you have any questions or encounter any issues, please feel free to reach out.

Happy database management!
