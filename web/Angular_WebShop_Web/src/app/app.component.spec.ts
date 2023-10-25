import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgModel, FormsModule } from '@angular/forms';
import { ShowDirective } from './directives/show/show.directive';
import { ActionMenuComponent } from './global/action-menu/action-menu.component';
import { AuthMenuComponent } from './global/auth-menu/auth-menu.component';
import { HeaderComponent } from './global/header/header.component';
import { NavigationItemComponent } from './global/navigation/navigation-item/navigation-item.component';
import { NavigationMenuComponent } from './global/navigation/navigation-menu/navigation-menu.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

describe('AppComponent', () => {
  beforeEach(() => 
    TestBed.configureTestingModule({
        declarations: [
            ProductItemComponent,
            ProductListComponent,
            AppComponent,
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
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'WebShop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('WebShop');
  });
});
