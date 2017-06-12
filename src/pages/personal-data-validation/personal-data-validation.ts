import { Component } from '@angular/core';
import { FarewellPage} from '../farewell/farewell';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-personal-data-validation',
  templateUrl: 'personal-data-validation.html'
})
export class PersonalDataValidationPage {

  constructor(public navCtrl: NavController) {

  }
  goToFarewellPage() {
    this.navCtrl.push(FarewellPage)
  }
}
