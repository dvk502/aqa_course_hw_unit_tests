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
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (value < 0) throw new TypeError('salary must be a number and positive');
    this.#salary = value;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    if (typeof title !== 'string') throw new TypeError('title must be a string');
    if (typeof phone !== 'number') throw new TypeError('phone must be a number');
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
}

export { Employee, Company };
