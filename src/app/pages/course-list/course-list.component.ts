import {Component, OnInit} from '@angular/core';
import {ICoursePreviewDto} from "../../models/ICourse";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/api/user-service";
import {IUser, MemberType} from "../../models/IUser";
import {CourseService} from "../../services/api/course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit{
  private user: IUser | null = null;
  public coursesList: ICoursePreviewDto[] = [];

  constructor(
    private router: ActivatedRoute,
    private userService: UserService,
    private courseService: CourseService,
  ) {
    this.userService.user$.subscribe(member => {
      if (member != null) {
        this.user = member

        this.courseService.getUserCourseList({userId: this.user.id, memberType: MemberType.MEMBER})
          .subscribe(response => {
            this.coursesList = response
          })
      }
    })
  }

  ngOnInit(): void {
  }

  truncateSummary(summary: string, maxLength: number): string {
  if (summary.length > maxLength) {
    return summary.substring(0, maxLength) + '...';
  } else {
    // Add spaces and then an ellipsis to ensure it always ends with ...
    return summary.padEnd(maxLength, ' ') + '...';
  }
}
}
