import {CompletionGrade} from "../../models/ISubmission";
import {StateInfo} from "./base-label/base-label.component";

export const COMPLETION_GRADE_LABEL_INFO: Record<CompletionGrade, StateInfo> = {
  OVERDONE: {
    text: 'OVERDONE',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  DONE: {
    text: 'DONE',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  PARTIAL_DONE: {
    text: 'PARTIAL_DONE',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  NOT_DONE: {
    text: 'NOT_DONE',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  NOT_ATTEMPTED: {
    text: 'NOT_ATTEMPTED',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  NONE: {
    text: 'DONE_CORRECTLY',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
}
