import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomNavigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom-navigation',
  templateUrl: 'custom-navigation.html',
  inputs: ['title','pageName','addBack','addSearch','addPerson']
})
export class CustomNavigationPage {
 pageName:string = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomNavigationPage');
  }

  goToBack(){
    this.navCtrl.pop();
  }

}
