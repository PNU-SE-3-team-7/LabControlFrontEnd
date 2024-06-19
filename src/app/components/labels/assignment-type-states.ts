import {StateInfo} from "./base-label/base-label.component";
import {AssignmentType} from "../../models/IAssignment";

export const ASSIGNMENT_TYPE_LABEL_INFO: Record<AssignmentType, StateInfo> = {
  ASSIGNMENT: {
    text: 'Лабораторна',
    lightColor: 'rgba(126,126,126,0.2)',
    mainColor: 'rgba(126,126,126)'
  },
  TASK: {
    text: 'Завдання',
    lightColor: 'rgba(100,50,74,0.2)',
    mainColor: 'rgba(100,50,74)'
  },
  MATERIAL: {
    text: 'Матеріал',
    lightColor: 'rgba(100,50,74,0.2)',
    mainColor: 'rgba(100,50,74)'
  },
}
