import { Component } from '@angular/core';
import { PersonalDataValidationPage } from '../personal-data-validation/personal-data-validation';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-personal-data',
  templateUrl: 'personal-data.html'
})

export class PersonalDataPage {

  constructor(public navCtrl: NavController) {

  }

goToPersonalDataValidationPage (){
    this.navCtrl.push(PersonalDataValidationPage)
  }

}
