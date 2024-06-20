import {SubmissionStatus} from "../../models/ISubmission";
import {StateInfo} from "./base-label/base-label.component";

export const SUBMISSION_GRADE_LABEL_INFO: Record<SubmissionStatus, StateInfo> = {
  NOT_TURNED_IN: {
    text: 'Нездано',
    lightColor: 'rgba(238, 78, 78,0.2)',
    mainColor: 'rgba(238, 78, 78)'
  },
  TURNED_IN: {
    text: 'Здано',
    lightColor: 'rgba(5, 146, 18,0.2)',
    mainColor: 'rgba(5, 146, 18)'
  },
  RETURNED: {
    text: 'Повернуто',
    lightColor: 'rgba(238, 78, 78,0.2)',
    mainColor: 'rgba(238, 78, 78)'
  },
  TURNED_IN_AGAIN: {
    text: 'Перездано',
    lightColor: 'rgba(5, 146, 18,0.2)',
    mainColor: 'rgba(5, 146, 18)'
  }
}
