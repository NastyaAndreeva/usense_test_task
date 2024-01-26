import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  calculateStrength(password: string) {
    const lengthCondition = password.length < 8;
    let strength = ['gray', 'gray', 'gray'];

    const easyCondition = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(
      password
    );
    const mediumCondition = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
      password
    );
    const strongCondition =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/.test(password);

    if (lengthCondition) {
      strength = ['red', 'red', 'red'];
    } else if (strongCondition) {
      strength = ['green', 'green', 'green'];
    } else if (mediumCondition) {
      strength = ['yellow', 'yellow', 'gray'];
    } else if (easyCondition) {
      strength = ['red', 'gray', 'gray'];
    }
    return strength;
  }
}
