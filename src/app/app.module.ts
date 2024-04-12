import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SeccionUnoComponent } from './seccion-uno/seccion-uno.component';
import { SeccionDosComponent } from './seccion-dos/seccion-dos.component';
import { SeccionTresComponent } from './seccion-tres/seccion-tres.component';
import { SeccionCuatroComponent } from './seccion-cuatro/seccion-cuatro.component';

// Importa initializeApp desde firebase/app
import { initializeApp } from 'firebase/app';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFooterComponent,
    NavBarComponent,
    SeccionUnoComponent,
    SeccionDosComponent,
    SeccionTresComponent,
    SeccionCuatroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyArgP6L4_zD2ukJ06V3yMdKA_3s92sqa8E',
      authDomain: 'emma-e33b8.firebaseapp.com',
      projectId: 'emma-e33b8',
      storageBucket: 'emma-e33b8.appspot.com',
      messagingSenderId: '953275277381',
      appId: '1:953275277381:web:4b7321951210e7b3dc832c',
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
  }
}
