import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the ActionSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');


  }
  abrirActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Opções",
      buttons: [{
        icon:'ios-copy-outline',
        text: 'Opção A',
        role: 'destrutivo',
        handler: () => {
          alert('Voce clicou na opcao A.');
        }
      }, {
        icon: 'ios-call-outline',
        text: 'Opção B',
        handler: () => {
          alert('Voce clicou na opcao B');
        }
      },{
        icon:'ios-alert-outline',
        text:'Cancelar',
        role:'cancel',
        handler:()=>{
      alert('Cancelou');
        }
      }],
    }).present();

  }
}
