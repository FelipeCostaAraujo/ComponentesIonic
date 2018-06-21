import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomNavigationPage } from './custom-navigation';

@NgModule({
  declarations: [
    CustomNavigationPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomNavigationPage),
  ],
})
export class CustomNavigationPageModule {}
