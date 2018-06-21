import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatatimePage } from './datatime';

@NgModule({
  declarations: [
    DatatimePage,
  ],
  imports: [
    IonicPageModule.forChild(DatatimePage),
  ],
})
export class DatatimePageModule {}
