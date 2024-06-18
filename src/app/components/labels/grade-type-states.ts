import {StateInfo} from "./base-label/base-label.component";
import {AssignmentType, GradeType} from "../../models/IAssignment";

export const GRADE_TYPE_LABEL_INFO: Record<GradeType, StateInfo> = {
  CONTINUOUS: {
    text: 'CONTINUOUS',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  DISCRETE: {
    text: 'DISCRETE',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
}
