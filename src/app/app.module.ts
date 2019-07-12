import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule, MatSidenavModule, MatDividerModule, MatTabsModule, MatSliderModule, MatIconModule, MatIconRegistry, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MusiclistcardComponent } from './musiclistcard/musiclistcard.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule, } from '@angular/fire';
import { AngularFirestoreModule, } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { AmbientlistcardComponent } from './ambientlistcard/ambientlistcard.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MusiclistcardComponent,
    LoginComponent,
    AmbientlistcardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

}
