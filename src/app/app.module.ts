import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './components/side-menu-item/side-menu-item.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    Page1Component,
    Page2Component,
    Page3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'app-page1', component: Page1Component },
      { path: 'app-page2', component: Page2Component },
      { path: 'app-page3', component: Page3Component },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
