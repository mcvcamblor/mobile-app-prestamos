import { Component } from '@angular/core';
import { TakeSignPage} from '../take-sign/take-sign';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalcheckPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modalcheck',
  templateUrl: 'modalcheck.html',
})
export class ModalcheckPage {

  constructor(private navCtrl: NavController, private navParams: NavParams, private view: ViewController) {
  }

  closeModalc(){
this.view.dismiss();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalcheckPage');
  }

  goToTakeSignPage() {
    this.navCtrl.push(TakeSignPage)
  }

}
