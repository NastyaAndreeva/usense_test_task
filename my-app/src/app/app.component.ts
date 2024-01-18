import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PasswordStrengthComponent],
  template: `<section class="content">
    <h2>The Password Strength Validator</h2>
    <app-password-strength></app-password-strength>
  </section>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
