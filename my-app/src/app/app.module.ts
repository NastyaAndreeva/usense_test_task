import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { PasswordInputComponent } from './password-strength/password-input/password-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent,
    PasswordInputComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
