import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

//componets
import { AppComponent } from './app.component';
import { FooterRightsComponent } from './footer-rights/footer-rights.component';
import { TodoModule } from './todo/todo.module';

// el modulo de ngrx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo/reducer/todo.reducer';

//devtools redux
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FooterRightsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // NG RX
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer }),
    // para devtools
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
