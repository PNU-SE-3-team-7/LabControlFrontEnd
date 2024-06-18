import {Component, Input} from '@angular/core';

export type StateInfo = {
  text: string
  lightColor: string
  mainColor: string
}

@Component({
  selector: 'app-base-label',
  templateUrl: './base-label.component.html',
  styleUrl: './base-label.component.scss'
})
export class BaseLabelComponent {
    @Input() stateInfo: StateInfo = {
      lightColor: "rgba(255, 255, 255, 0.2)",
      mainColor: "rgba(255, 255, 255)",
      text: "Unknown"
    }
}
