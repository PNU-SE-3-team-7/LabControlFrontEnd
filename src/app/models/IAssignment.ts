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
  weight: number;
  threshold: number;
  sequence: number;
}

export enum AssignmentType {
  ASSIGNMENT = "ASSIGNMENT",
  TASK = "TASK",
  MATERIAL = "MATERIAL"
}

export enum GradeType {
  CONTINUOUS = "CONTINUOUS",
  DISCRETE = "DISCRETE"
}

export enum AutoType {
  MANUAL = "MANUAL",
  AUTO = "AUTO"
}
