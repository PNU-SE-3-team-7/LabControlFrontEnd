import {AfterContentInit, Directive, ElementRef} from "@angular/core";

@Directive({
    selector: "[onViewFocus]"
})
export class OnViewFocusDirective implements AfterContentInit {

    constructor(
        private ref: ElementRef,
    ) {
    }

    ngAfterContentInit(): void {
        setTimeout(() => {
            this.ref.nativeElement.focus();
        }, 250);
    }
}
