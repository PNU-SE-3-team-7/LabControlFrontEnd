import { Directive, ViewContainerRef, OnInit, ComponentRef } from '@angular/core';
import { BaseStrokeInputComponent } from "./base-stroke-input.component";

@Directive({
  standalone: true,
  selector: '[app-stroke-input]'
})
export class AppStrokeButton implements OnInit {
  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    const componentRef: ComponentRef<BaseStrokeInputComponent> = this.viewContainerRef.createComponent(BaseStrokeInputComponent);
    const hostElem = this.viewContainerRef.element.nativeElement;

    hostElem.replaceWith(componentRef.location.nativeElement);
  }
}
