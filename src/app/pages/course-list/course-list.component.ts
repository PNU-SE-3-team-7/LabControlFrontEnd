import {Component, OnInit} from '@angular/core';
import {ICourse} from "../../models/ICourse";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit{
  public coursesList: ICourse[] = [];

  constructor(
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.coursesList = [
        {
          id: '12345',
          name: 'Arsen',
          summary: 'lol'
        }, {
          id: '345345',
          name: 'Arsen',
          summary: 'lol'
        }, {
          id: '456456',
          name: 'Arsen',
          summary: 'lol'
        }, {
          id: '5467474',
          name: 'Arsen',
          summary: 'lol'
        },
      ]
    })
  }
}
