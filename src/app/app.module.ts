import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonalDataPage} from '../pages/personal-data/personal-data';
import { PersonalDataValidationPage } from '../pages/personal-data-validation/personal-data-validation';
import { FarewellPage} from '../pages/farewell/farewell';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonalDataPage,
    PersonalDataValidationPage,
    FarewellPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonalDataPage,
    PersonalDataValidationPage,
    FarewellPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
