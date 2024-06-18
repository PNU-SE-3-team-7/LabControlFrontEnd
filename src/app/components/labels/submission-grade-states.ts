import {SubmissionStatus} from "../../models/ISubmission";
import {StateInfo} from "./base-label/base-label.component";

export const SUBMISSION_GRADE_LABEL_INFO: Record<SubmissionStatus, StateInfo> = {
  NOT_TURNED_IN: {
    text: 'NOT_TURNED_IN',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  TURNED_IN: {
    text: 'TURNED_IN',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  RETURNED: {
    text: 'RETURNED',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  TURNED_IN_AGAIN: {
    text: 'TURNED_IN_AGAIN',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  }
}
