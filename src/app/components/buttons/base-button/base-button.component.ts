import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.scss'
})
export class BaseButtonComponent {
  @Input() disabled: boolean = false;
  @Input() active: boolean = false;
}
