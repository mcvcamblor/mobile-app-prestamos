import { Component } from '@angular/core';
import { UndefinedPagePage} from '../undefined-page/undefined-page';
import { NavController ,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-offer-info',
  templateUrl: 'offer-info.html'

})
export class OfferInfoPage {

  constructor(private navCtrl: NavController, private modal: ModalController) {

  }
  goToUndefinedPagePage() {
    this.navCtrl.push(UndefinedPagePage)
  }

  openModal(){
    const mobileAppPrestamos = this.modal.create("ModalPage");
    mobileAppPrestamos.present();
  }

}
