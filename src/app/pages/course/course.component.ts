import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  protected isPeoplesPageAvailable(): boolean{
    return "courseId" in this.router.snapshot.params
  }
}
