import { Component, EventEmitter, Output, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  password: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  @Output()
  passwordChanged = new EventEmitter<string>();

  writeValue(value: any): void {
    if (value !== undefined) {
      this.password = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(): void {
    this.onChange(this.password);
    this.onTouched();
    this.passwordChanged.emit(this.password);
  }
}
