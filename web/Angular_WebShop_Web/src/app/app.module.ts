import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './global/header/header.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { NewsWrapperComponent } from './components/news/news-wrapper/news-wrapper.component';
import { NewsItemComponent } from './components/news/news-item/news-item.component';
import { AuthMenuComponent } from './global/auth-menu/auth-menu.component';
import { ActionMenuComponent } from './global/action-menu/action-menu.component';
import { NavigationMenuComponent } from './global/navigation/navigation-menu/navigation-menu.component';
import { NavigationItemComponent } from './global/navigation/navigation-item/navigation-item.component';
import { ShowDirective } from './directives/show/show.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductListComponent,
    NewsWrapperComponent,
    NewsItemComponent,
    AuthMenuComponent,
    ActionMenuComponent,
    NavigationMenuComponent,
    NavigationItemComponent,
    ShowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
