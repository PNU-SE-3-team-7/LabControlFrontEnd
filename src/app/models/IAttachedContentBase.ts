

export interface IAttachedContentBase {
  id: string
  fileName: string
  fileUri: string
}

export interface IAssignmentAttachedContent extends IAttachedContentBase {
  assignmentId: string
}


export interface ISubmissionAttachedContent extends IAttachedContentBase {
  submissionId: string
}
