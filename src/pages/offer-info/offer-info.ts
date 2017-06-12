import { Component } from '@angular/core';
import { UndefinedPagePage} from '../undefined-page/undefined-page';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-offer-info',
  templateUrl: 'offer-info.html'

})
export class OfferInfoPage {

  constructor(public navCtrl: NavController) {

  }
  goToUndefinedPagePage() {
    this.navCtrl.push(UndefinedPagePage)
  }

}
