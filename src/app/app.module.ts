import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Form1Component } from './form1/form1.component';
import { NestedFormComponent } from './form1/nested-form/nested-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Form1Component,
    NestedFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
