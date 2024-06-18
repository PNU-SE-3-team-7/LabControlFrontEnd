import {Component, Input} from '@angular/core';
import {AccuracyGrade} from "../../../models/ISubmission";
import {ACCURACY_GRADE_LABEL_INFO} from "../accurast-grade-states";

@Component({
  selector: 'app-accuracy-grade-label',
  templateUrl: './accuracy-grade-label.component.html',
  styleUrl: './accuracy-grade-label.component.scss'
})
export class AccuracyGradeLabelComponent {
  @Input() grade: AccuracyGrade = AccuracyGrade.NONE;
  public readonly AccuracyGrade = AccuracyGrade;
  public readonly ACCURACY_GRADE_LABEL_INFO = ACCURACY_GRADE_LABEL_INFO;
}
