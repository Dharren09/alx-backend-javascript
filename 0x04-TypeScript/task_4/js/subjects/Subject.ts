/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    public setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
