import { Component } from '@angular/core';
import { OfferInfoPage} from '../offer-info/offer-info';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-take-selfie',
  templateUrl: 'take-selfie.html'
})
export class TakeSelfiePage {

  image: string = null;

  constructor(public navCtrl: NavController, private camera: Camera
  ) {}

  goToOfferInfoPage() {
    this.navCtrl.push(OfferInfoPage)
  }
  getPicture(){
      let options: CameraOptions = {
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000,
        quality: 100
      }
      this.camera.getPicture( options )
      .then(imageData => {
        this.image = `data:image/jpeg;base64,${imageData}`;
      })
      .catch(error =>{
        console.error( error );
      });
    }
}
