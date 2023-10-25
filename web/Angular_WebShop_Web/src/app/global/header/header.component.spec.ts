import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthMenuComponent } from '../auth-menu/auth-menu.component';
import { ActionMenuComponent } from '../action-menu/action-menu.component';
import { NavigationMenuComponent } from '../navigation/navigation-menu/navigation-menu.component';
import { NavigationItemComponent } from '../navigation/navigation-item/navigation-item.component';
import { ShowDirective } from 'src/app/directives/show/show.directive';
import { NgModel } from '@angular/forms';

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
        ]
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('WebShop');
  });
});
