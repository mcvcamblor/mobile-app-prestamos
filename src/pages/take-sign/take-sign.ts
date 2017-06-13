import { Component } from '@angular/core';
import { FarewellPage} from '../farewell/farewell';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-take-sign',
  templateUrl: 'take-sign.html'
})
export class TakeSignPage {



  constructor(public navCtrl: NavController) {

  }
  goToFarewellPage() {
    this.navCtrl.push(FarewellPage)
  }
}
