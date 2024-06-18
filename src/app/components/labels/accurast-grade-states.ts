import {AccuracyGrade} from "../../models/ISubmission";
import {StateInfo} from "./base-label/base-label.component";

export const ACCURACY_GRADE_LABEL_INFO: Record<AccuracyGrade | string, StateInfo> = {
  DONE_CORRECTLY: {
    text: 'DONE_CORRECTLY',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  DONE_INACCURATELY: {
    text: 'DONE_INACCURATELY',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  DONE_WRONG: {
    text: 'DONE_WRONG',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  NOT_DONE: {
    text: 'NOT_DONE',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  OFF_TASK: {
    text: 'OFF_TASK',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  NONE: {
    text: 'NONE',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
}
