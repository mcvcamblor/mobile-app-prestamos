import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSeeMorePage } from './modal-see-more';

@NgModule({
  declarations: [
    ModalSeeMorePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSeeMorePage),
  ],
  exports: [
    ModalSeeMorePage
  ]
})
export class ModalSeeMorePageModule {}
