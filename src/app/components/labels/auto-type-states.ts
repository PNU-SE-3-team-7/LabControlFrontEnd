import {StateInfo} from "./base-label/base-label.component";
import {AutoType} from "../../models/IAssignment";

export const AUTO_TYPE_LABEL_INFO: Record<AutoType, StateInfo> = {
  MANUAL: {
    text: 'Звичайне',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
  AUTO: {
    text: 'Автоматичне',
    lightColor: 'rgba(250,42,42,0.2)',
    mainColor: 'rgba(255,0,0)'
  },
}
