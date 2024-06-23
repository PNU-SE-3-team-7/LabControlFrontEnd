import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IAssignment} from "../../../models/IAssignment";
import {ISubmission, SUBMISSION_STATUS_TO_SUBMIT_TEXT} from "../../../models/ISubmission";
import {ACCURACY_GRADE_LABEL_INFO} from "../../../components/labels/accurast-grade-states";
import {COMPLETION_GRADE_LABEL_INFO} from "../../../components/labels/completion-grade-states";
import {IAssignmentAttachedContent, ISubmissionAttachedContent} from "../../../models/IAttachedContentBase";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";
import {ASSIGNMENT_TYPE_LABEL_INFO} from "../../../components/labels/assignment-type-states";
import {ISubmissionComment} from "../../../models/IComment";
import {IAttachedComponentAddLinkType} from "../../../components/attached-content/attached-content.component";
import {CourseChildEventType, ICourseButtonDetails, ICourseChildEvents} from "../course.component";
import {AssignmentService} from "../../../services/api/assignment-service";
import {SubmissionService} from "../../../services/api/submission-service";
import {UserService} from "../../../services/api/user-service";
import {ICourseUserPreviewDto} from "../../../models/IUser";

@Component({
  selector: 'app-course-assignment',
  templateUrl: './course-assignment.component.html',
  styleUrl: './course-assignment.component.scss'
})
export class CourseAssignmentComponent implements OnInit, ICourseChildEvents {
  protected member: ICourseUserPreviewDto = UserService.getUserPreviewDtoPlaceholder()
  private assignmentId?: string;
  private courseId?: string;

  protected assignment: IAssignment = AssignmentService.getPlaceholder()
  protected assignmentAttachedContent: IAssignmentAttachedContent[] = []
  protected attachedContent: ISubmissionAttachedContent[] = []
  protected submission: ISubmission = SubmissionService.getPlaceholder()
  protected subAssignments: IAssignment[] = []
  protected submissionComments: ISubmissionComment[] = []

  protected membersSubmission: {}[] = []
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matSnack: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private assignmentService: AssignmentService,
    private submissionService: SubmissionService,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.data.subscribe(data => {
      this.member = data['member'];
    });

    this.activatedRoute.paramMap.subscribe(params => {
      this.assignmentId = params.get('assignmentId') || ""
    });
    this.activatedRoute.parent?.paramMap.subscribe(params => {
      this.courseId = params.get('courseId') || '';
    });
  }

  getButtonsVisibility(): Partial<Record<CourseChildEventType, ICourseButtonDetails>> {
    return {
      ADD: {
        visible: true,
        text: "Add subassignment",
      },
      EDIT: {
        visible: true,
        text: "Edit",
      }
    }
  }

  onButtonClicked(type: CourseChildEventType): void {
    switch (type) {
      case CourseChildEventType.EDIT:
        this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
        break
      case CourseChildEventType.ADD:
        this.router.navigate([`../${this.assignment.id}/create`], {relativeTo: this.activatedRoute});
    }
  }

  protected onRemoveAssigmentAttachedContent(itemId: string): void {
    this.assignmentAttachedContent = this.assignmentAttachedContent.filter(content => content.id !== itemId)
  }

  protected onRemoveSubmissionAttachedContent(itemId: string): void {
    this.attachedContent = this.attachedContent.filter(content => content.id !== itemId)
  }

  protected onSubmissionAttachedContentUpdated(content: IAttachedComponentAddLinkType) {
    this.attachedContent.push({
      fileName: "",
      fileUri: content.url,
      id: "123",
      submissionId: "2323"
    })
  }

  protected onAssignmentAttachedContentUpdated(content: IAttachedComponentAddLinkType) {
    this.assignmentAttachedContent.push({
      fileName: "",
      fileUri: content.url,
      id: "123",
      assignmentId: "23254"
    })
  }

  public formatDate(date: Date): string {
    return date.toLocaleString('uk-UA', {
      timeZone: 'Europe/Kyiv',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  protected readonly ACCURACY_GRADE_LABEL_INFO = ACCURACY_GRADE_LABEL_INFO;
  protected readonly COMPLETION_GRADE_LABEL_INFO = COMPLETION_GRADE_LABEL_INFO;
  protected readonly ASSIGNMENT_TYPE_LABEL_INFO = ASSIGNMENT_TYPE_LABEL_INFO;
  protected readonly SUBMISSION_GRADE_TO_SUBMIT_TEXT = SUBMISSION_STATUS_TO_SUBMIT_TEXT;
}
