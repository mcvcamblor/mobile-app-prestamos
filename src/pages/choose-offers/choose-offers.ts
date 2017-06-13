import { Component } from '@angular/core';
import { TakeSignPage} from '../take-sign/take-sign';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-choose-offers',
  templateUrl: 'choose-offers.html'
})
export class ChooseOffersPage {



  constructor(public navCtrl: NavController) {

  }
  goToTakeSignPage() {
    this.navCtrl.push(TakeSignPage)
  }
}
