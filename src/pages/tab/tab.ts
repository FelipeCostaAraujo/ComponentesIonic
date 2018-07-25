import { CardPage } from './../card/card';
import { BotoesPage } from './../botoes/botoes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastPage } from '../toast/toast';

/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  botoesPage = BotoesPage;
  cardPage = CardPage;
  toastPage = ToastPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
