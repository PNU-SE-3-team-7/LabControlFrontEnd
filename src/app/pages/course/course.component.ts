import {Component, OnInit} from "@angular/core";
import {ICourse} from "../../models/ICourse";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent implements OnInit {
  public course: ICourse = {
    id: "JJerome",
    name: "Bagato textu tutu povinno buti",
    summary: "Bagato textu tutu povinno buti Bagato textu tutu povinno butiBagato textu tutu povinno buti"
  }

  constructor(
    private router: ActivatedRoute,
  ) {
  }


  ngOnInit(): void {
    console.log(this.router.snapshot.params)
  }
}
