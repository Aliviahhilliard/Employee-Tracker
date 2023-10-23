### README.md for 12 SQL: Employee Tracker

---

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
  - [User Story](#user-story)
- [Technologies Used](#technologies-used)
- [Database Schema](#database-schema)
- [Features](#features)
- [Walkthrough Video](#walkthrough-video)
- [Bonus Features](#bonus-features)
- [Contributions](#contributions)
- [License](#license)

---

## Overview

The Employee Tracker is a command-line application designed for business owners who wish to easily manage a company's employee database. Utilizing Node.js, Inquirer, and MySQL, this application provides an effective content management system for tracking employees, roles, and departments.

---

## Installation

### Pre-requisites

- Node.js
- MySQL

1. Clone this repository to your local machine.
2. Run `npm install` to install dependencies.
3. Execute the `seeds.sql` file in your MySQL client to pre-populate the database.
4. Rename `.env.example` to `.env` and add your MySQL credentials.

---

## Usage

### User Story

```markdown
AS A business owner,
I WANT to be able to view and manage the departments, roles, and employees in my company,
SO THAT I can organize and plan my business.
```

GIVEN a command-line application that accepts user input

- WHEN I start the application, 
THEN I am presented with a menu that offers options to view all departments, roles, and employees,
and to add a department, role, or employee, or update an employee's role.

- WHEN I choose to view all departments, 
THEN I see a formatted table that displays department names and their unique IDs.

- WHEN I choose to view all roles, 
THEN I see a formatted table showing job titles, role IDs, associated department names, and salaries.

- WHEN I choose to view all employees, 
THEN I am presented with a table listing employee IDs, first and last names, job titles, departments, salaries, and their reporting managers.

- WHEN I choose to add a department, 
THEN I am guided by prompts to enter the department's name, which is then added to the database.

- WHEN I choose to add a role, 
THEN I am prompted to input the role's name, salary, and associated department, following which the role is added to the database.

- WHEN I choose to add an employee,
THEN I go through a series of prompts asking for the first and last names, role, and manager of the new employee, and this information is subsequently added to the database.

- WHEN I choose to update an employee role, 
THEN I am presented with a prompt to select an existing employee and a new role for them, and upon confirmation, the database is updated to reflect these changes.

---

## Technologies Used

- Node.js
- Inquirer (v8.2.4)
- MySQL
- MySQL2 npm package

---

## Database Schema

![Database Schema](./Assets/12-sql-homework-demo-01.png)

---

## Features

- View all departments, roles, and employees.
- Add new departments, roles, and employees.
- Update existing employee roles.

---

## Walkthrough Video

- [Link to the Walkthrough Video](#)

---

## Bonus Features

- Update employee managers.
- View employees by manager.
- View employees by department.
- Delete departments, roles, and employees.
- View total utilized budget of a department.

---

## Contributions

Feel free to fork this repository and submit pull requests. For major changes, please open an issue to discuss the proposed change.

---

## License

This project is licensed under the terms of the MIT license.
