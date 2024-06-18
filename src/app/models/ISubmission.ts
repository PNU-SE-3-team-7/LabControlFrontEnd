
export interface ISubmission {
  assignmentId: string;
  userId: string;
  parentId: string;
  turnedInDate: Date;
  submissionStatus: SubmissionStatus;
  grade: number;
  autoGrade: number;
  createdDate: Date;
  updatedDate: Date;
  accuracyGrade: AccuracyGrade;
  completionGrade: CompletionGrade;
}

export enum SubmissionStatus {
  NOT_TURNED_IN = "NOT_TURNED_IN",
  TURNED_IN = "TURNED_IN",
  RETURNED = "RETURNED",
  TURNED_IN_AGAIN = "TURNED_IN_AGAIN",
}

export enum AccuracyGrade {
  DONE_CORRECTLY = "DONE_CORRECTLY",
  DONE_INACCURATELY = "DONE_INACCURATELY",
  DONE_WRONG = "DONE_WRONG",
  NOT_DONE = "NOT_DONE",
  OFF_TASK = "OFF_TASK",
  NONE = "NONE"
}

export enum CompletionGrade {
  OVERDONE = "OVERDONE",
  DONE = "DONE",
  PARTIAL_DONE = "PARTIAL_DONE",
  NOT_DONE = "NOT_DONE",
  NOT_ATTEMPTED = "NOT_ATTEMPTED",
  NONE = "NONE"
}
