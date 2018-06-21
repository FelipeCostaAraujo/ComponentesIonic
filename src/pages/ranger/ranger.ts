import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RangerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranger',
  templateUrl: 'ranger.html',
})
export class RangerPage {

  brilhoDaTela: number = 100;
  taxa:number = 1000;
  faixaEtaria: any = {lower:16,upper:60};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RangerPage');
  }

  

}
