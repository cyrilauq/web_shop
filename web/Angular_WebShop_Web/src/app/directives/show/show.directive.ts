import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/**
 * Definition of a directive that will display or not a value based on a given condition.
 * If is true, then the block will be displayed, if not it will be hidden.
 */

@Directive({
  selector: '[show]'
})

export class ShowDirective {
    private _show: boolean = true
    @Input()
    get show(): boolean {
        return this._show
    }
    set show(value: boolean) {
        this._show = value
        this.showElement(value)
    }

    constructor(private el: ElementRef) { }

    private showElement(value: boolean) {
      this.el.nativeElement.style.visibility = value ? "visible" : "hidden"
    }

}
