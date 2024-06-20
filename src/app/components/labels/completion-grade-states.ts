import {CompletionGrade} from "../../models/ISubmission";
import {StateInfo} from "./base-label/base-label.component";

export const COMPLETION_GRADE_LABEL_INFO: Record<CompletionGrade, StateInfo> = {
  OVERDONE: {
    text: 'Перевиконано',
    lightColor: 'rgba(255, 166, 47,0.2)',
    mainColor: 'rgba(255, 166, 47)'
  },
  DONE: {
    text: 'Виконано',
    lightColor: 'rgba(0,255,60,0.2)',
    mainColor: 'rgba(0,255,60)'
  },
  PARTIAL_DONE: {
    text: 'Частково правильно',
    lightColor: 'rgba(255, 166, 47,0.2)',
    mainColor: 'rgba(255, 166, 47)'
  },
  NOT_DONE: {
    text: 'Невиконано',
    lightColor: 'rgba(238, 78, 78,0.2)',
    mainColor: 'rgba(238, 78, 78)'
  },
  NOT_ATTEMPTED: {
    text: 'Нерозпочато',
    lightColor: 'rgba(2,2,2,0.2)',
    mainColor: 'rgba(2,2,2)'
  },
  NONE: {
    text: 'Виконано правильно',
    lightColor: 'rgba(0,255,60,0.2)',
    mainColor: 'rgba(0,255,60)'
  },
}
