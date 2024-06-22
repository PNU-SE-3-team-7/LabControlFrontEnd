import {StateInfo} from "./base-label/base-label.component";
import {AssignmentType} from "../../models/IAssignment";

export const ASSIGNMENT_TYPE_LABEL_INFO: Record<AssignmentType, StateInfo> = {
  ASSIGNMENT: {
    text: 'Лабораторна',
    lightColor: 'rgba(255, 166, 47,0.2)',
    mainColor: 'rgba(255, 166, 47)'
  },
  TASK: {
    text: 'Завдання',
    lightColor: 'rgba(238, 78, 78,0.2)',
    mainColor: 'rgba(238, 78, 78)'
  },
  MATERIAL: {
    text: 'Матеріал',
    lightColor: 'rgba(5, 146, 18,0.2)',
    mainColor: 'rgba(5, 146, 18)'
  },
}
