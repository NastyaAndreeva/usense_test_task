// password-strength.component.ts
import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordStrengthService } from './password-strength.service';
import { PasswordInputComponent } from './password-input/password-input.component';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule, PasswordInputComponent],
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  strength: string[] = ['gray', 'gray', 'gray'];

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  calculateStrength(value: string) {
    this.password = value;
    this.strength = this.passwordStrengthService.calculateStrength(
      this.password
    );
  }
}
