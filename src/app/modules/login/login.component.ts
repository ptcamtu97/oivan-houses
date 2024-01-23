import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginFace } from '../../store/fades';
import { LoginService } from '../../services';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFace = inject(LoginFace);
  loginServiceService = inject(LoginService);

  loginForm = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {
    this.loginFace.initToken();
  }

  login(): void {
    this.loginFace.login(
      this.loginForm.value.userName,
      this.loginForm.value.password
    );
  }

  logout(): void {
    this.loginForm.reset();
    this.loginFace.logout();
  }
}
