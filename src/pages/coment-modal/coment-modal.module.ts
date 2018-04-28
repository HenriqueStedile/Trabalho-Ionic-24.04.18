import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentModalPage } from './coment-modal';

@NgModule({
  declarations: [
    ComentModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ComentModalPage),
  ],
})
export class ComentModalPageModule {}
