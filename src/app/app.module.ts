import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatepickerDirective } from './datepicker.directive';


@NgModule({
  declarations: [
    AppComponent,
    DatepickerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    DatepickerDirective
  ]
})
export class AppModule { }
