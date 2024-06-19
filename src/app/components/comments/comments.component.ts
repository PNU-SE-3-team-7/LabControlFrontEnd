import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup} from "@angular/forms";
import {IAssignmentComment, ICommentBase, ISubmissionComment} from "../../models/IComment";
import {IUser} from "../../models/IUser";

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

  protected user: IUser = {
    id: '1',
    name: 'JJerome',
    email: 'jjerome@gmail.com',
    role: 'USER'
  }
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

  protected getUserColor(userId: string): string {
    const hashCode = (str: string): number => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    };

    const randomColor = () => {
      const hash = Math.abs(hashCode(userId));
      let r = (hash & 0xFF0000) >> 16;
      let g = (hash & 0x00FF00) >> 8;
      let b = hash & 0x0000FF;

      const minBrightness = 128;
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      if (brightness > minBrightness) {
        r = Math.floor(r * minBrightness / brightness);
        g = Math.floor(g * minBrightness / brightness);
        b = Math.floor(b * minBrightness / brightness);
      }

      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    return randomColor();
  }
}
