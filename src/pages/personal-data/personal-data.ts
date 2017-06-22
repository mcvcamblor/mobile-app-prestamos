import { Component } from '@angular/core';
import { TakeSelfiePage } from '../take-selfie/take-selfie';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-personal-data',
  templateUrl: 'personal-data.html'
})

export class PersonalDataPage {

  constructor(public navCtrl: NavController) {

  
  }

goToTakeSelfiePage(){
    this.navCtrl.push(TakeSelfiePage)
  }









}
