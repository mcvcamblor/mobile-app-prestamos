import { Component } from '@angular/core';
import { TakeSignPage} from '../take-sign/take-sign';

import { NavController, ModalController } from 'ionic-angular';


@Component({
  selector: 'page-choose-offers',
  templateUrl: 'choose-offers.html'
})
export class ChooseOffersPage {



  constructor(private navCtrl: NavController, private modal: ModalController) {

  }
  goToTakeSignPage() {
    this.navCtrl.push(TakeSignPage)
  }

  openModal() {
   const mobileAppPrestamos = this.modal.create('ModalSeeMorePage');
   mobileAppPrestamos.present();

 }

 openModalcheck() {
  const mobileAppPrestamos = this.modal.create('ModalcheckPage');
  mobileAppPrestamos.present();

}
}
