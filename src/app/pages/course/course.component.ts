import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit {
  protected courseId: string = "";

  constructor(
    private router: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    if ("courseId" in this.router.snapshot.params){
      this.courseId = this.router.snapshot.params["courseId"] || ""
    }
  }

  protected previousPage(): void {
    this.location.back();
  }

  protected isPeoplesPageAvailable(): boolean{
    return "courseId" in this.router.snapshot.params
  }
}
