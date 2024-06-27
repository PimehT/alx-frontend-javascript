export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }

  [Symbol.toPrimitive](hint) {
    const c = this._code;
    const n = this._name;
    if (hint === 'string') {
      return `${this.constructor.name} [${c}] { _name: '${n}', _code: '${c}' }`;
    }
    return this.toString();
  }
}

/*
class Exam {
  constructor(name) {
    this._name = name;
  }

  greet() {
    return `${this.constructor.toString}`;
  }
}
a = new Exam('joe'); */
