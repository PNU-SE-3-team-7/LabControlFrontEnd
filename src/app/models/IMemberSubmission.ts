import {AccuracyGrade, CompletionGrade} from "./ISubmission";

export interface MemberSubmissionDto {
  submissionId: string;
  userId: string;
  grade: number;
  updatedDate: Date;
  completionGrade: CompletionGrade;
  accuracyGrade: AccuracyGrade;
}
