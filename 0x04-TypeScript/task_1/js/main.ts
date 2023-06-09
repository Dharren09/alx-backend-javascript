interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
  contract: boolean;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherInterface {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherInterface = (firstName, lastName) => {
  return '${firstName.charAt(0)}. ${lastName}';
};

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

const StudentClass: StudentConstructor = class StudentClass implements Student {
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
};

export { printTeacher, StudentClass };
