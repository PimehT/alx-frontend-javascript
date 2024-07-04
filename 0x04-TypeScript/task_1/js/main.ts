export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

export interface StudentClassConstructor {
    new (firstName: string, lastName: string): Student;
}

export class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

export function createStudent(ctor: StudentClassConstructor, firstName: string, lastName: string): Student {
  return new ctor(firstName, lastName);
}
