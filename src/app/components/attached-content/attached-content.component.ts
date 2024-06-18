import {Component, Input, OnInit} from '@angular/core';
import {
  IAssignmentAttachedContent,
  IAttachedContentBase,
  ISubmissionAttachedContent
} from "../../models/IAttachedContentBase";
import {
  AddAttachedLinkDialogComponent,
  IAddAttachedLinkDialogReturnDataType
} from "../dialogs/add-attached-link-dialog/add-attached-link-dialog.component";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface IAddCommentForm{
  message: FormControl<string>
}

@Component({
  selector: 'app-attached-content',
  templateUrl: './attached-content.component.html',
  styleUrl: './attached-content.component.scss'
})
export class AttachedContentComponent implements OnInit {

  @Input() attachedContent?: IAttachedContentBase[] | IAssignmentAttachedContent[] | ISubmissionAttachedContent[];
  @Input() editable: boolean = false;

  private contentType: "BASE" | "ASSIGNMENT" | "SUBMISSION" = "BASE"

  protected addCommentForm: FormGroup<IAddCommentForm> = new FormGroup<IAddCommentForm>(<IAddCommentForm>{
    message: new FormControl<string>("")
  })

  constructor(
    private router: ActivatedRoute,
    private matSnack: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    if (this.attachedContent && this.attachedContent.length > 0) {
      const item = this.attachedContent[0]

      if (this.isIAssignmentAttachedContent(item)) {
        this.contentType = "ASSIGNMENT";
      } else if (this.isISubmissionAttachedContent(item)) {
        this.contentType = "SUBMISSION";
      } else {
        this.contentType = "BASE";
      }
    }
  }

  protected goToLink(url: string) {
    window.open(url, "_blank");
  }

  private isIAssignmentAttachedContent(content: IAttachedContentBase): content is IAssignmentAttachedContent {
    return (content as IAssignmentAttachedContent).assignmentId !== undefined;
  }

  private isISubmissionAttachedContent(content: IAttachedContentBase): content is ISubmissionAttachedContent {
    return (content as ISubmissionAttachedContent).submissionId !== undefined;
  }

  protected addAttachedContentLink(): void {
    if (!this.editable) return;

    this.dialog
      .open(AddAttachedLinkDialogComponent, {
        width: "80%",
      })
      .afterClosed().subscribe((result: IAddAttachedLinkDialogReturnDataType) => {
        console.log(result)

        if (this.attachedContent != undefined) {
          this.attachedContent.push({
            assignmentId: "234234",
            submissionId: '34',
            id: '45',
            fileName: '',
            fileUri: result.fileUri
          })

          this.matSnack.open("Link added successfully", "OK", {duration: 5000})
        }

      }, error => this.matSnack.open("Something went wrong", "OK", {duration: 5000})
    )
  }

  protected removeAttachedContent(id: string): void {
    if (this.editable){
      this.attachedContent = this.attachedContent?.filter(s => s.id !== id)
    }
  }
}
