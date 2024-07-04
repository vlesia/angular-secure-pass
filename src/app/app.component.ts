import { Component } from '@angular/core';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordStrengthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'secure-pass';
}
