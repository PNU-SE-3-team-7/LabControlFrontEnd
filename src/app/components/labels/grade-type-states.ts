import {StateInfo} from "./base-label/base-label.component";
import {AssignmentType, GradeType} from "../../models/IAssignment";

export const GRADE_TYPE_LABEL_INFO: Record<GradeType, StateInfo> = {
  CONTINUOUS: {
    text: 'Звичайне',
    lightColor: 'rgba(0,129,30,0.2)',
    mainColor: 'rgb(0,129,30)'
  },
  DISCRETE: {
    text: 'Дискретне',
    lightColor: 'rgba(21,0,18,0.2)',
    mainColor: 'rgb(21,0,181)'
  },
}
