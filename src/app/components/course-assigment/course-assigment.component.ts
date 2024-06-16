import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-assigment',
  templateUrl: './course-assigment.component.html',
  styleUrl: './course-assigment.component.scss'
})
export class CourseAssigmentComponent implements OnInit{

    constructor(
      private router: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
      console.log(this.router.snapshot.params)
    }
}
