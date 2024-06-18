import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AssignmentType, AutoType, GradeType, IAssignment} from "../../../models/IAssignment";
import {AccuracyGrade, CompletionGrade, ISubmission, SubmissionStatus} from "../../../models/ISubmission";
import {ACCURACY_GRADE_LABEL_INFO} from "../../../components/labels/accurast-grade-states";
import {COMPLETION_GRADE_LABEL_INFO} from "../../../components/labels/completion-grade-states";
import {ISubmissionAttachedContent} from "../../../models/IAttachedContentBase";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {
  AddAttachedLinkDialogComponent, IAddAttachedLinkDialogReturnDataType
} from "../../../components/dialogs/add-attached-link-dialog/add-attached-link-dialog.component";
import {ISubmissionComment} from "../../../models/IComment";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface IAddCommentForm{
  message: FormControl<string>
}

@Component({
  selector: 'app-course-assignment',
  templateUrl: './course-assignment.component.html',
  styleUrl: './course-assignment.component.scss'
})
export class CourseAssignmentComponent implements OnInit {
  protected assignment: IAssignment = {
    id: '1',
    courseId: 'course1',
    parentId: 'parent1',
    title: 'Assignment 1',
    description: 'This is the first assignment',
    type: AssignmentType.ASSIGNMENT,
    submissionEnabled: true,
    updatedDate: new Date('2023-06-01T10:00:00Z'),
    createdDate: new Date('2023-05-15T12:30:00Z'),
    dueDate: new Date('2023-06-15T23:59:59Z'),
    visibilityStart: new Date('2023-06-01T00:00:00Z'),
    visibilityEnd: new Date('2023-06-30T23:59:59Z'),
    visibility: true,
    gradeType: GradeType.CONTINUOUS,
    autoType: AutoType.MANUAL,
    maxGrade: 10,
    weight: 25,
    threshold: 70,
    sequence: 1
  }
  protected attachedContent: ISubmissionAttachedContent[] = [
    {
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },{
      submissionId: '1',
      id: '232434',
      fileName: '',
      fileUri: 'https://rt.pornhub.com/'
    },
  ]
  protected submission: ISubmission = {
    assignmentId: '34345',
    userId: '12314324',
    parentId: '456546',
    turnedInDate: new Date('2023-06-01T10:00:00Z'),
    submissionStatus: SubmissionStatus.NOT_TURNED_IN,
    grade: 7,
    autoGrade: 8,
    createdDate: new Date('2023-06-01T10:00:00Z'),
    updatedDate: new Date('2023-06-01T10:00:00Z'),
    accuracyGrade: AccuracyGrade.DONE_CORRECTLY,
    completionGrade: CompletionGrade.OVERDONE
  }
  protected subAssignments: IAssignment[] = [
    {
      id: '2',
      courseId: 'course2',
      parentId: 'parent2',
      title: 'Assignment 2',
      description: 'This is the second assignment',
      type: AssignmentType.ASSIGNMENT,
      submissionEnabled: true,
      updatedDate: new Date('2023-06-10T14:30:00Z'),
      createdDate: new Date('2023-05-20T09:00:00Z'),
      dueDate: new Date('2023-06-20T23:59:59Z'),
      visibilityStart: new Date('2023-06-10T00:00:00Z'),
      visibilityEnd: new Date('2023-07-05T23:59:59Z'),
      visibility: true,
      gradeType: GradeType.CONTINUOUS,
      autoType: AutoType.AUTO,
      maxGrade: 10,
      weight: 30,
      threshold: 80,
      sequence: 2
    },
    {
      id: '3',
      courseId: 'course3',
      parentId: 'parent3',
      title: 'Assignment 3',
      description: 'This is the third assignment',
      type: AssignmentType.ASSIGNMENT,
      submissionEnabled: false,
      updatedDate: new Date('2023-06-15T16:00:00Z'),
      createdDate: new Date('2023-05-25T10:30:00Z'),
      dueDate: new Date('2023-07-01T23:59:59Z'),
      visibilityStart: new Date('2023-06-20T00:00:00Z'),
      visibilityEnd: new Date('2023-07-10T23:59:59Z'),
      visibility: true,
      gradeType: GradeType.CONTINUOUS,
      autoType: AutoType.MANUAL,
      maxGrade: 10,
      weight: 40,
      threshold: 75,
      sequence: 3
    },
    {
      id: '4',
      courseId: 'course4',
      parentId: 'parent4',
      title: 'Assignment 4',
      description: 'This is the fourth assignment',
      type: AssignmentType.ASSIGNMENT,
      submissionEnabled: true,
      updatedDate: new Date('2023-06-20T11:15:00Z'),
      createdDate: new Date('2023-05-30T14:45:00Z'),
      dueDate: new Date('2023-07-10T23:59:59Z'),
      visibilityStart: new Date('2023-06-25T00:00:00Z'),
      visibilityEnd: new Date('2023-07-20T23:59:59Z'),
      visibility: false,
      gradeType: GradeType.CONTINUOUS,
      autoType: AutoType.AUTO,
      maxGrade: 10,
      weight: 20,
      threshold: 60,
      sequence: 4
    },
    {
      id: '5',
      courseId: 'course5',
      parentId: 'parent5',
      title: 'Assignment 5',
      description: 'This is the fifth assignment',
      type: AssignmentType.ASSIGNMENT,
      submissionEnabled: true,
      updatedDate: new Date('2023-06-25T09:30:00Z'),
      createdDate: new Date('2023-06-01T16:00:00Z'),
      dueDate: new Date('2023-07-15T23:59:59Z'),
      visibilityStart: new Date('2023-07-01T00:00:00Z'),
      visibilityEnd: new Date('2023-07-25T23:59:59Z'),
      visibility: true,
      gradeType: GradeType.CONTINUOUS,
      autoType: AutoType.MANUAL,
      maxGrade: 10,
      weight: 15,
      threshold: 65,
      sequence: 5
    }
  ];
  protected submissionComments: ISubmissionComment[] = [
    {
      submissionId: 'sdfsdf',
      id: 'sdfsdf',
      senderId: 'sdfsdf',
      createdDate: new Date('2023-06-10T14:30:00Z'),
      message: 'Message'
    },
    {
      submissionId: 'sdfsdf',
      id: 'sdfsdf',
      senderId: 'sdfsdf',
      createdDate: new Date('2023-06-10T14:30:00Z'),
      message: 'Message'
    },
    {
      submissionId: 'sdfsdf',
      id: 'sdfsdf',
      senderId: 'sdfsdf',
      createdDate: new Date('2023-06-10T14:30:00Z'),
      message: 'Message'
    },
    {
      submissionId: 'sdfsdf',
      id: 'sdfsdf',
      senderId: 'sdfsdf',
      createdDate: new Date('2023-06-10T14:30:00Z'),
      message: 'Message'
    },
  ]

  protected addCommentForm: FormGroup<IAddCommentForm> = new FormGroup<IAddCommentForm>(<IAddCommentForm>{
     message: new FormControl<string>("")
  })

  constructor(
    private router: ActivatedRoute,
    private matSnack: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.addCommentForm = fb.group<IAddCommentForm>(<IAddCommentForm>{
      message: new FormControl<string>("")
    })
  }

  ngOnInit(): void {
    console.log(this.router.snapshot.params)
  }

  protected addSubmissionComment(): void{
    if (this.addCommentForm.valid && this.addCommentForm.get('message')?.value !== '') {
      this.submissionComments.push({
        submissionId: 'sdfsdf',
        id: 'sdfsdf',
        senderId: 'sdfsdf',
        createdDate: new Date('2023-06-10T14:30:00Z'),
        message: this.addCommentForm.get('message')?.value || ""
      });
    }
  }

  protected addAttachedContentLink(): void {
    this.dialog
      .open(AddAttachedLinkDialogComponent, {
        width: "80%",
      })
      .afterClosed().subscribe((result:IAddAttachedLinkDialogReturnDataType) => {
      console.log(result)
      this.attachedContent.push({
        submissionId: '34',
        id: '45',
        fileName: '',
        fileUri: result.fileUri
      })

        this.matSnack.open("Link added successfully", "OK", {duration: 5000})

    }, error =>  this.matSnack.open("Something went wrong", "OK", {duration: 5000})
    )
  }

  protected removeAttachedContent(id: string): void {
    this.attachedContent = this.attachedContent.filter(s => s.id !== id)
  }

  protected readonly ACCURACY_GRADE_LABEL_INFO = ACCURACY_GRADE_LABEL_INFO;
  protected readonly COMPLETION_GRADE_LABEL_INFO = COMPLETION_GRADE_LABEL_INFO;
}
