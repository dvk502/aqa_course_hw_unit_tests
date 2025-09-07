class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    if (typeof firstName !== 'string') throw new TypeError('firstName must be a string');
    if (typeof lastName !== 'string') throw new TypeError('lastName must be a string');
    if (typeof profession !== 'string') throw new TypeError('profession must be a string');
    if (typeof salary !== 'number') throw new TypeError('salary must be a number');

    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }
  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (!/^[A-Za-z]{2,50}$/.test(value)) {
      throw new TypeError('Value must contain only Latin letters and be 2 to 50 characters long');
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (!/^[A-Za-z]{2,50}$/.test(value)) {
      throw new TypeError('Value must contain only Latin letters and be 2 to 50 characters long');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (typeof value !== 'string' || value.trim() === '' || !/^[A-Za-z ]+$/.test(value)) {
      throw new TypeError('Profession must be a non-empty string with only Latin letters and spaces');
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0 || value >= 10000) {
      throw new TypeError('Salary must be a valid number between 1 and 9999');
    }
    this.#salary = value;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    if (typeof title !== 'string') throw new TypeError('title must be a string');
    // if (typeof phone !== 'number') throw new TypeError('phone must be a number');
    if (typeof address !== 'string') throw new TypeError('address must be a string');

    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new TypeError('employee must be an instance of Employee');
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((employee) => employee.firstName === firstName);
    if (!employee) throw new Error(`Employee with name "${firstName}" not found`);
    return employee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((employee) => employee.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);

    if (index === -1) {
      throw new Error(`Employee with firstName "${firstName}" not found`);
    }

    this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((summ, employee) => (summ += employee.salary), 0);
  }
}

const company = new Company('Tech Corp', '123', 'Main Street');

console.log(company.getTotalSalary());

export { Employee, Company };
