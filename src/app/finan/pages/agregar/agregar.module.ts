import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
    declarations: [],
    imports: [
      FormsModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      BrowserAnimationsModule
    ],

    exports: [
        FormsModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      
    ]
  

 
  
  
})
export class agregarModule { }
