import {StateInfo} from "./base-label/base-label.component";
import {AssignmentType} from "../../models/IAssignment";

export const ASSIGNMENT_TYPE_LABEL_INFO: Record<AssignmentType, StateInfo> = {
  ASSIGNMENT: {
    text: 'ASSIGNMENT',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  TASK: {
    text: 'TASK',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  MATERIAL: {
    text: 'MATERIAL',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
}
