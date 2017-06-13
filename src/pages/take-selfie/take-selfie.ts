import { Component } from '@angular/core';
import { OfferInfoPage} from '../offer-info/offer-info';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-take-selfie',
  templateUrl: 'take-selfie.html'
})
export class TakeSelfiePage {

  constructor(public navCtrl: NavController) {

  }
  goToOfferInfoPage() {
    this.navCtrl.push(OfferInfoPage)
  }
}
