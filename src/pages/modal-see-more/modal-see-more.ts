import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalSeeMorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-see-more',
  templateUrl: 'modal-see-more.html',
})
export class ModalSeeMorePage {

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  closeModalSeeMore(){
 this.view.dismiss();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSeeMorePage');
  }

}
