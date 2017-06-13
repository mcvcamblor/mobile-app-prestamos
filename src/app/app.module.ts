import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PersonalDataPage} from '../pages/personal-data/personal-data';
import { UndefinedPagePage} from '../pages/undefined-page/undefined-page';
import { OfferInfoPage} from '../pages/offer-info/offer-info';
import { ChooseOffersPage} from '../pages/choose-offers/choose-offers';
import { TakeSignPage} from '../pages/take-sign/take-sign';
import { TakeSelfiePage} from '../pages/take-selfie/take-selfie';
import { FarewellPage} from '../pages/farewell/farewell';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonalDataPage,
    TakeSelfiePage,
    OfferInfoPage,
    UndefinedPagePage,
    ChooseOffersPage,
    TakeSignPage,
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
  TakeSelfiePage,
  OfferInfoPage,
  UndefinedPagePage,
  ChooseOffersPage,
  TakeSignPage,
  FarewellPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
