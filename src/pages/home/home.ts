import { Component } from '@angular/core';
import { PersonalDataPage} from '../personal-data/personal-data';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToPersonalDataPage() {
    this.navCtrl.push(PersonalDataPage)
  }
}
