import { Component, ElementRef } from '@angular/core';
import { ShowDirective } from './show.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionMenuComponent } from 'src/app/global/action-menu/action-menu.component';

@Component({
    template: `
      <div class="hide-me" [show]="show">You don't see me</div>
    `
})
class ShowComponentTestTrue {
    public show = true
}

@Component({
    template: `
      <div class="show-me" [show]="show">You don't see me</div>
    `
})
class ShowComponentTestFalse {
    public show = false
}
  
describe('ShowDirectiveTest', () => {
    let fixture: ComponentFixture<ShowComponentTestTrue>;
    let hiddenFixture: ComponentFixture<ShowComponentTestTrue>;

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [ ShowDirective, ShowComponentTestTrue, ShowComponentTestFalse ]
        })
            .compileComponents()

        fixture = TestBed.createComponent(ShowComponentTestTrue);
        fixture.detectChanges();

        hiddenFixture = TestBed.createComponent(ShowComponentTestFalse);
        hiddenFixture.detectChanges();
    }));

    it('should show component when show directive is true', () => {
        const element: HTMLElement = fixture.nativeElement.querySelector('div');
        expect(element).toBeTruthy();
        expect(element.style.visibility).toEqual('visible');
    });

    it('should hdden component when show directive is false', () => {
        const element: HTMLElement = hiddenFixture.nativeElement.querySelector('div');
        expect(element).toBeTruthy();
        expect(element.style.visibility).toEqual('hidden');
    });
});