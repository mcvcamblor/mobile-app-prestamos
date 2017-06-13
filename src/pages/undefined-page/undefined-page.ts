import { Component } from '@angular/core';
import { ChooseOffersPage} from '../choose-offers/choose-offers';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-undefined-page',
  templateUrl: 'undefined-page.html'
})
export class UndefinedPagePage {



  constructor(public navCtrl: NavController) {

  }
  goToChooseOffersPage() {
    this.navCtrl.push(ChooseOffersPage)
  }
}
