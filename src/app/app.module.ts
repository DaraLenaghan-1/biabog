// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Import AngularFire modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjMxPEb3k2Jq4HpfQIXvBT6VvkMn8hp-A",
  authDomain: "dummybiabog.firebaseapp.com",
  projectId: "dummybiabog",
  storageBucket: "dummybiabog.appspot.com",
  messagingSenderId: "751795679739",
  appId: "1:751795679739:web:c9362fe0fecf759c55db5e"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Initialize Firebase
    AngularFireAuthModule // Import AngularFireAuthModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
