import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuComponent } from './navigation-menu.component';
import { NavigationItemComponent } from '../navigation-item/navigation-item.component';

describe('NavigationMenuComponent', () => {
    let component: NavigationMenuComponent;
    let fixture: ComponentFixture<NavigationMenuComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavigationMenuComponent,
                NavigationItemComponent
            ]
        });
        fixture = TestBed.createComponent(NavigationMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
