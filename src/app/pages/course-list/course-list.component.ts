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

  truncateSummary(summary: string, maxLength: number): string {
  if (summary.length > maxLength) {
    return summary.substring(0, maxLength) + '...';
  } else {
    // Add spaces and then an ellipsis to ensure it always ends with ...
    return summary.padEnd(maxLength, ' ') + '...';
  }
}

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.coursesList = [
        {
          id: '12345',
          name: 'Комплексний аналіз',
          summary: 'Sed ac erat lacinia, tincidunt velit eu, rutrum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Cras volutpat in mauris feugiat vehicula. Praesent vulputate libero tortor, sed dictum nisi bibendum at. In ut nulla ornare, pellentesque dui in, rutrum velit. Suspendisse vehicula justo a ex dignissim, non dapibus lorem porta.'
        }, {
          id: '345345',
          name: 'Back-end програмування. NestJS',
          summary: 'Nullam quis odio ut lectus placerat cursus in non sem. Proin turpis orci, ornare ac diam in, tempus pretium quam. Donec ac lectus eu tellus accumsan fringilla quis et purus.'
        }, {
          id: '456456',
          name: 'Технології DevOps ',
          summary: 'Aenean semper metus mauris, non volutpat arcu bibendum eleifend. Morbi ac tristique nunc. Nam rhoncus lorem arcu, et sodales massa ullamcorper vitae. Etiam purus neque, eleifend eu neque vitae, posuere varius ligula. Sed vitae ultricies nibh. Suspendisse urna dolor, semper eu gravida in, efficitur ut sapien. In nulla erat, sagittis vitae bibendum vitae, gravida non ex. Vivamus nunc enim, egestas at tellus vel, placerat commodo nunc. Etiam in ligula dolor. Donec faucibus gravida scelerisque. Duis dolor quam, dictum eget pulvinar nec, euismod at nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec pretium auctor dictum. Sed faucibus metus eu erat sodales auctor. Proin hendrerit arcu vitae ipsum cursus mollis. Fusce venenatis arcu felis.'
        }, {
          id: '5467474',
          name: 'Ретроспективний аналіз ідей виховання і громадянської освіти особистості',
          summary: 'Etiam varius tincidunt nisi id faucibus.'
        }, {
          id: '321',
          name: 'Психологія сексуальності',
          summary: 'Donec sem diam, porttitor id neque vitae, semper ultricies turpis. Curabitur vestibulum lacus quis lectus luctus, id bibendum urna vehicula. Aliquam sollicitudin.'
        }, {
          id: '123',
          name: 'Фінанси малого бізнесу',
          summary: 'Curabitur quis urna sit amet eros tempor ultrices eu ut quam.'
        }, {
          id: '213',
          name: 'Корпоративна культура',
          summary: 'Quisque pulvinar elementum erat, id hendrerit orci porttitor quis. Fusce mattis sapien quis ante rutrum, nec tincidunt lacus sollicitudin. Nunc facilisis vulputate tortor, varius interdum ex feugiat sed. Integer quis sem volutpat, maximus arcu non, faucibus lacus. Suspendisse ac nisi non leo egestas lobortis. Nam sed commodo risus. Vestibulum quam nibh, tristique ac pharetra eget, suscipit id libero. Praesent suscipit ex non aliquet tincidunt. Phasellus malesuada vehicula libero eu gravida. Vivamus sit amet augue ac ligula rutrum tempor. Nunc justo arcu, aliquet viverra est eget, luctus ultrices orci. Duis non mauris ex.'
        }, {
          id: '345',
          name: 'Антикризовий менеджмент',
          summary: 'Sed rhoncus blandit volutpat. Curabitur venenatis magna ligula, eu dapibus neque faucibus vel.'
        }, {
          id: '543',
          name: 'Патентознавство та авторські права',
          summary: 'Aliquam tortor justo, tincidunt vitae tincidunt at, laoreet ac velit. In quis enim quam. Cras ultrices lacus in tellus rhoncus faucibus. Phasellus pellentesque metus eget ipsum ullamcorper sagittis.'
        },
      ]
    })
  }
}
