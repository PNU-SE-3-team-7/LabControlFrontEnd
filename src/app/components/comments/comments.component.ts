import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup} from "@angular/forms";
import {IAssignmentComment, ICommentBase, ISubmissionComment} from "../../models/IComment";

interface IAddCommentForm {
  message: FormControl<string>
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  @Input() comments: ICommentBase[] | IAssignmentComment[] | ISubmissionComment[] = [];
  @Input() editable: boolean = false;

  private commenetType: "BASE" | "ASSIGNMENT" | "SUBMISSION" = "BASE"

  protected addCommentForm: FormGroup<IAddCommentForm> = new FormGroup<IAddCommentForm>(<IAddCommentForm>{
    message: new FormControl<string>("")
  })

  constructor(
    private matSnack: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    if (this.comments && this.comments.length > 0) {
      const item = this.comments[0]

      if (this.isIAssignmentComment(item)) {
        this.commenetType = "ASSIGNMENT";
      } else if (this.isISubmissionAttachedContent(item)) {
        this.commenetType = "SUBMISSION";
      } else {
        this.commenetType = "BASE";
      }
    }
  }

  private isIAssignmentComment(content: ICommentBase): content is IAssignmentComment {
    return (content as IAssignmentComment).assignmentId !== undefined;
  }

  private isISubmissionAttachedContent(content: ICommentBase): content is ISubmissionComment {
    return (content as ISubmissionComment).submissionId !== undefined;
  }

  protected addSubmissionComment(): void {
    if (this.addCommentForm.valid && this.addCommentForm.get('message')?.value !== '') {
      this.comments.push({
        submissionId: 'sdfsdf',
        assignmentId: "dfdf",
        id: '1',
        senderId: 'sdfsdf',
        createdDate: new Date('2023-06-10T14:30:00Z'),
        message: this.addCommentForm.get('message')?.value || ""
      });
    }
  }
}
