import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalcheckPage } from './modalcheck';

@NgModule({
  declarations: [
    ModalcheckPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalcheckPage),
  ],
  exports: [
    ModalcheckPage
  ]
})
export class ModalcheckPageModule {}
