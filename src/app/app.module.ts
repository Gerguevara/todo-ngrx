import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterRightsComponent } from './footer-rights/footer-rights.component';
import { TodoModule } from './todo/todo.module';

//componets


@NgModule({
  declarations: [
    AppComponent,
    FooterRightsComponent
  ],
  imports: [
    BrowserModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
