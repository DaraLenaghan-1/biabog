// src/app/login/login.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Adjust the path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  navigateToHome() {
    this.router.navigateByUrl('/home');
  }

  onLogin() {
    this.authService.signIn(this.email, this.password)
      .then(() => {
        // Handle successful login
        this.navigateToHome();
      })
      .catch(error => {
        // Handle login error
        console.error(error);
        // Show an error message to the user
      });
  }

}
