import { Component } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [NgClass],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss',
})

export class PasswordStrengthComponent {
  strengthLevel: number = 0;
  strengthClass: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  checkPasswordStrength(event: Event): void {
    const password = (event.target as HTMLInputElement).value;
    const result = this.passwordStrengthService.calculateStrength(password);
    this.strengthLevel = result.strengthLevel;
    this.strengthClass = result.strengthClass;
  }
}

