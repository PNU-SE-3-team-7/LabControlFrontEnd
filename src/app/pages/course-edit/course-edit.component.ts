import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface CourseEditFormType {
  name: FormControl<string>,
  summary: FormControl<string>,
}

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrl: './course-edit.component.scss'
})
export class CourseEditComponent implements OnInit {
  protected courseEditForm: FormGroup<CourseEditFormType> = new FormGroup<CourseEditFormType>(<CourseEditFormType>{
    name: new FormControl<string>(""),
    summary: new FormControl<string>(""),
  });

  constructor(
    private router: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.courseEditForm = fb.group<CourseEditFormType>(<CourseEditFormType>{
      name: new FormControl<string>(""),
      summary: new FormControl<string>(""),
    })
  }

  ngOnInit(): void {
  }

  protected previousPage(): void {
    this.location.back();
  }
}
