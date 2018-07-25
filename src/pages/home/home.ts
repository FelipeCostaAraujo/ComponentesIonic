import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public toastCtrl:ToastController) {

  }

  ionViewDidLoad() {
   this.showToastLong();
  }


  showToastLong(){
    this.toastCtrl.create({
 message:'Seja bem Vindo ao meu app em ionic,Todos componentes aqui estao na documentacao do ionic',
 duration:1000
    }).present();
   }
}
