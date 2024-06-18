

export interface ICommentBase{
  id: string
  senderId: string
  createdDate: Date
  message: string
}

export interface ISubmissionComment extends ICommentBase{
  submissionId: string
}

export interface IAssignmentComment extends ICommentBase{
  assignmentId: string
}
