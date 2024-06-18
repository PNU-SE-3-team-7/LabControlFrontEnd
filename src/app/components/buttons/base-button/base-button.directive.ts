import { Directive, Input, ViewContainerRef, OnInit, ComponentRef } from '@angular/core';
import { BaseButtonComponent } from './base-button.component';

@Directive({
  standalone: true,
  selector: '[appBaseButton]'
})
export class BaseButtonDirective implements OnInit {
  @Input() routerLink: string = "";
  @Input() disabled: boolean = false;
  @Input() active: boolean = false;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    const componentRef: ComponentRef<BaseButtonComponent> = this.viewContainerRef.createComponent(BaseButtonComponent);
    componentRef.instance.disabled = this.disabled;
    componentRef.instance.active = this.active;

    const hostElem = this.viewContainerRef.element.nativeElement;
    hostElem.replaceWith(componentRef.location.nativeElement);
  }
}
