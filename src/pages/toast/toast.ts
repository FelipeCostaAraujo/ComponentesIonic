import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    
  }

  showToast(direcao:string){
   let toast = this.toastCtrl.create({
   message: 'Dados salvo com sucesso !!',
   duration:3000,
   position:direcao
   });

   toast.present();
  }

  showToastLong(){
   this.toastCtrl.create({
message:'Seja bem Vindo ao meu app em ionic,Todos componentes aqui estao na documentacao do ionic',
duration:10000
   }).present();
  }


  showToastWithCloseButton(){
this.toastCtrl.create({
message:'Operacao realizada com sucesso !!',
showCloseButton:true,
closeButtonText:'OK'
}).present();
}


 }
