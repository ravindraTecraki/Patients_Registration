import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [CommonModule,  FormsModule, NgxCaptchaModule, BrowserModule, ReactiveFormsModule],
 
})
export class PatientsModule {}
