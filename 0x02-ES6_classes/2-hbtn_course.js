export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new Error('Name must be a string');
    if (typeof length !== 'number') throw new Error('Length must be a number');
    if (!Array.isArray(students)) throw new Error('students must be an Array');

    for (const student of students) {
      if (typeof student !== 'string') { throw new Error('students must contain strings'); }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(value) {
    if (typeof value !== 'string') throw new Error('Not a string');
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length !== 'number') throw TypeError('length must be a Number');
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (!Array.isArray(students)) throw TypeError('students must be an Array');
    for (const el of students) {
      if (typeof el !== 'string') { throw TypeError('students must contain strings'); }
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
