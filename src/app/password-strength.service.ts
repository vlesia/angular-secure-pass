import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {

  calculateStrength(password: string): { strengthLevel: number, strengthClass: string } {
    if (password.length < 8) {
      return { strengthLevel: 3, strengthClass: 'weak'};
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return { strengthLevel: 3, strengthClass: 'strong'};
    }

    if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      return { strengthLevel: 2, strengthClass: 'medium'};
    }

    return { strengthLevel: 1, strengthClass: 'weak'};
  }
}
