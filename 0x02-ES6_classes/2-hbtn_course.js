export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new Error('Name must be a string');
    } else if (typeof (length) !== 'number') {
      throw new Error('Length must be a number');
    } else if (typeof (students) !== 'object') {
      throw new Error('Students must be an array object');
    }

    this._name = typeof (name) === 'string' ? name : new Error('Name must be a string');
    this._length = typeof (length) === 'number' ? length : new Error('Length must be a number');
    this._students = typeof (students) === 'object' ? students : new Error('Students must be an array object');
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this._students = students;
  }
}
