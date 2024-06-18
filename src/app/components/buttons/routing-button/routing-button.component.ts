import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-routing-button',
  templateUrl: './routing-button.component.html',
  styleUrl: './routing-button.component.scss'
})
export class RoutingButtonComponent {

  @Input() routerLink: string = "";
  @Input() disabled: boolean = false;
  @Input() active: boolean = false;
}
