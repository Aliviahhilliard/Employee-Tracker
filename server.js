// Import required npm modules
const inquirer = require('inquirer');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Establish connection to MySQL database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db',
  },
  console.log(`Connected to the employee_db database.`)
);

// Connect to the MySQL server and database
connection.connect((err) => {
    if (err) throw err;
    // If no error, start the app by running the start function
    start();
});

// Transform the callback-based connection.query from mysql2 module to a Promise-based variant
connection.query = util.promisify(connection.query);

// This is the starting point of the app
function start() {
    // Inquirer module is used to ask questions in the console
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit',
            ],
        })
        .then((answer) => {
            // Depending on user's answer, call the appropriate function
            switch (answer.action) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                default:
                    // If user chooses to exit, end the connection to the database
                    connection.end();
                    break;
            }
        });
}

async function viewAllDepartments() {
    try {
        const query = 'SELECT * FROM department';
        const data = await connection.query(query);
        console.table(data);
        start();
    } catch (err) {
        console.error(err);
        start();
    }
}

async function viewAllRoles() {
    try {
        const query = 'SELECT * FROM role';
        const data = await connection.query(query);
        console.table(data);
        start();
    } catch (err) {
        console.error(err);
        start();
    }
}

async function viewAllEmployees() {
    try {
        const query = 'SELECT * FROM employee';
        const data = await connection.query(query);
        console.table(data);
        start();
    } catch (err) {
        console.error(err);
        start();
    }
}

async function addDepartment() {
    const department = await inquirer.prompt([
        {
            name: 'name',
            message: 'What is the name of the department?',
        },
    ]);

    try {
        const query = `INSERT INTO department (name) VALUES ('${department.name}')`;
        await connection.query(query);
        console.log(`Added department ${department.name}`);
        start();
    } catch (err) {
        console.error(err);
        start();
    }
}

async function addRole() {
    const role = await inquirer.prompt([
        {
            name: 'title',
            message: 'What is the title of the role?',
        },
        {
            name: 'salary',
            message: 'What is the salary of the role?',
        },
        {
            name: 'department_id',
            message: 'What is the ID of the department this role belongs to?',
        },
    ]);

    try {
        const query = `INSERT INTO role (title, salary, department_id) VALUES ('${role.title}', '${role.salary}', '${role.department_id}')`;
        await connection.query(query);
        console.log(`Added role ${role.title}`);
        start();
    } catch (err) {
        console.error(err);
        start();
    }
}

async function addEmployee() {
    const employee = await inquirer.prompt([
        {
            name: 'first_name',
            message: 'What is the first name of the employee?',
        },
        {
            name: 'last_name',
            message: 'What is the last name of the employee?',
        },
        {
            name: 'role_id',
            message: 'What is the role ID of the employee?',
        },
        {
            name: 'manager_id',
            message: 'What is the manager ID of the employee? (Leave empty if none)',
        },
    ]);

    try {
        const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${employee.first_name}', '${employee.last_name}', '${employee.role_id}', ${employee.manager_id || null})`;
        await connection.query(query);
        console.log(`Added employee ${employee.first_name} ${employee.last_name}`);
        start();
    } catch (err) {
        console.error(err);
        start();
    }
}

async function updateEmployeeRole() {
    const employeeUpdate = await inquirer.prompt([
        {
            name: 'id',
            message: 'What is the ID of the employee you want to update?',
        },
        {
            name: 'role_id',
            message: 'What is the new role ID for the employee?',
        },
    ]);

    try {
        const query = `UPDATE employee SET role_id = ${employeeUpdate.role_id} WHERE id = ${employeeUpdate.id}`;
        await connection.query(query);
        console.log(`Updated employee's role with ID ${employeeUpdate.id}`);
        start();
    } catch (err) {
        console.error(err);
        start();
    }
}


// Define the functions viewAllDepartments(), viewAllRoles(), viewAllEmployees(), 
// addDepartment(), addRole(), addEmployee(), and updateEmployeeRole() here...
// Each function should perform the corresponding database query and handle the results.
