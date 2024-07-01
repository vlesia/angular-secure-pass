import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss',
})

export class PasswordStrengthComponent implements OnInit {
  strengthLevel: number = 0;
  strengthClass: string = '';
  ngOnInit() { };

  checkPasswordStrength(event: Event): void {
    const password = (event.target as HTMLInputElement).value;
    this.strengthLevel = this.calculateStrength(password);
  }

  calculateStrength(password: string): number {
    if (password.length < 8) {
      this.strengthClass = 'weak';
      return 3;
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      this.strengthClass = 'strong';
      return 3;
    }

    if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      this.strengthClass = 'medium';
      return 2;
    }

    this.strengthClass = 'weak';
    return 1;
  }
}

