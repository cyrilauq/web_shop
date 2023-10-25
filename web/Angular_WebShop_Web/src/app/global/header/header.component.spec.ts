import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthMenuComponent } from '../auth-menu/auth-menu.component';
import { ActionMenuComponent } from '../action-menu/action-menu.component';
import { NavigationMenuComponent } from '../navigation/navigation-menu/navigation-menu.component';
import { NavigationItemComponent } from '../navigation/navigation-item/navigation-item.component';
import { ShowDirective } from 'src/app/directives/show/show.directive';
import { FormsModule, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { DebugElement, Input, forwardRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent,
                AuthMenuComponent,
                ActionMenuComponent,
                NavigationMenuComponent,
                NavigationItemComponent,
                ShowDirective,
                NgModel
            ],
            // Put this import when testing component with ngmodel directive 
            imports: [
                FormsModule
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        component.appTitle = "TestApp"
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('TestApp');
    });

    
    it('When header hidden and menu btn clicked then the menu is visible', () => {    
        const element: DebugElement = fixture.debugElement.query(By.css('.menu_btn'));
        element.triggerEventHandler('click');
        fixture.detectChanges();
    
        expect(
            fixture.debugElement.query(By.css('app-navigation-menu')).nativeElement.style.visibility
        ).toEqual('visible');
    });

    
    it('When header visible and menu btn clicked then the menu is hidden', () => {    
        const element: DebugElement = fixture.debugElement.query(By.css('.menu_btn'));
        element.triggerEventHandler('click');
        fixture.detectChanges();
        element.triggerEventHandler('click');
        fixture.detectChanges();
    
        expect(
            fixture.debugElement.query(By.css('app-navigation-menu')).nativeElement.style.visibility
        ).toEqual('hidden');
    });
});
