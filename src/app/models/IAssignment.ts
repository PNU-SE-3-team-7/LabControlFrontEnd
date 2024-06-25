export interface IAssignment {
  id: string;
  courseId: string;
  parentId: string;
  title: string;
  description: string;
  type: AssignmentType;
  submissionEnabled: boolean;
  updatedDate: Date;
  createdDate: Date;
  dueDate: Date;
  visibilityStart: Date;
  visibilityEnd: Date;
  visibility: boolean;
  gradeType: GradeType;
  autoType: AutoType;
  maxGrade: number;
  weight: number;
  threshold: number;
  sequence: number;
}

export interface IAssignmentSearchDto {
  assignmentId?: string;
  courseId?: string;
}

export interface IAssignmentCreateDto {
  courseId: string;
  parentId: string;
  title: string;
  description: string;
  type: AssignmentType;
  submissionEnabled: boolean;
  dueDate: Date;
  visibilityStart: Date;
  visibilityEnd: Date;
  gradeType: GradeType;
  autoType: AutoType;
  maxGrade: number;
  weight: number;
  threshold: number;
  sequence: number;
}

export enum AssignmentType {
  ASSIGNMENT = "ASSIGNMENT",
  TASK = "TASK",
  MATERIAL = "MATERIAL"
}

export namespace AssignmentType {
  export const formValues: { value: AssignmentType, name: string }[] = [
    {
      value: AssignmentType.ASSIGNMENT,
      name: "Лабораторна"
    }, {
      value: AssignmentType.TASK,
      name: "Завдання"
    }, {
      value: AssignmentType.MATERIAL,
      name: "Матеріал"
    },
  ]
}

export enum GradeType {
  CONTINUOUS = "CONTINUOUS",
  DISCRETE = "DISCRETE"
}

export namespace GradeType {
  export const formValues: { value: GradeType, name: string }[] = [
    {
      value: GradeType.CONTINUOUS,
      name: "Звичайне"
    }, {
      value: GradeType.DISCRETE,
      name: "Дискретне"
    }
  ]
}


export enum AutoType {
  MANUAL = "MANUAL",
  AUTO = "AUTO"
}

export namespace AutoType {
  export const formValues: { value: AutoType, name: string }[] = [
    {
      value: AutoType.MANUAL,
      name: "Звичайне"
    }, {
      value: AutoType.AUTO,
      name: "Автоматичне"
    }
  ]
}
