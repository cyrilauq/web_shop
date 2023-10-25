import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[show]'
})
export class ShowDirective {
    @Input() showEl = false

    constructor(private el: ElementRef) {
        this.el.nativeElement.style.display = this.showEl ? "block" : "none"
    }

}
