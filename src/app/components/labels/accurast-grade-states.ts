import {AccuracyGrade} from "../../models/ISubmission";
import {StateInfo} from "./base-label/base-label.component";

export const ACCURACY_GRADE_LABEL_INFO: Record<AccuracyGrade | string, StateInfo> = {
  DONE_CORRECTLY: {
    text: 'Коректно',
    lightColor: 'rgba(0,255,60,0.2)',
    mainColor: 'rgb(0,255,60)'
  },
  DONE_INACCURATELY: {
    text: 'Некоректно',
    lightColor: 'rgba(255,230,100,0.2)',
    mainColor: 'rgb(255,190,50)'
  },
  DONE_WRONG: {
    text: 'Неправильно',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  NOT_DONE: {
    text: 'Невиконано',
    lightColor: 'rgba(100,100,100,0.2)',
    mainColor: 'rgb(100,100,100)'
  },
  OFF_TASK: {
    text: 'Неточно',
    lightColor: 'rgba(2,2,2,0.2)',
    mainColor: 'rgba(2,2,2)'
  },
  NONE: {
    text: 'Пусто',
    lightColor: 'rgba(2,2,2,0.2)',
    mainColor: 'rgba(2,2,2)'
  },
}
