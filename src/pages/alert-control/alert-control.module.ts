import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertControlPage } from './alert-control';

@NgModule({
  declarations: [
    AlertControlPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertControlPage),
  ],
})
export class AlertControlPageModule {}
