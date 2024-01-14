// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  // User signup method
  async signUp(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log(result);
      // Handle additional user details or navigation
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  }

  // User login method
  async signIn(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log(result);
      // Handle navigation or user session
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  }

  // Add other authentication methods as needed
}
