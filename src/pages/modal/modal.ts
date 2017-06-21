import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, NavController} from 'ionic-angular';
import {ChooseOffersPage} from '../choose-offers/choose-offers';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(private navParams: NavParams, private  view: ViewController, public navCtrl: NavController) {
  }


  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  goToChooseOffersPage() {
    this.navCtrl.push(ChooseOffersPage)
  }

}
