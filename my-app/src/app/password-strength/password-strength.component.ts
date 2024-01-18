import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css',
})
export class PasswordStrengthComponent {
  password: string = '';
  strength: string[] = ['gray', 'gray', 'gray'];

  calculateStrength() {
    const lengthCondition = this.password.length < 8;

    const easyCondition = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(
      this.password
    );
    const mediumCondition = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
      this.password
    );
    const strongCondition =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$/.test(this.password);

    if (lengthCondition) {
      this.strength = ['red', 'red', 'red'];
    } else if (strongCondition) {
      this.strength = ['green', 'green', 'green'];
    } else if (mediumCondition) {
      this.strength = ['yellow', 'yellow', 'gray'];
    } else if (easyCondition) {
      this.strength = ['red', 'gray', 'gray'];
    }

    if (this.password == '') {
      this.strength = ['gray', 'gray', 'gray'];
    }
  }
}
