import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
   
  }


  salvar(){
    let loader = this.loadingCtrl.create({
      content:'Por Favor aguarde...',
      spinner:'bubbles',
      duration:3000
    });
 
    loader.present();
  }

  salvarCustom(){
    let aguardeCustom = this.loadingCtrl.create({
      spinner: 'hide',
      content: '<div class="custom-spinner-container"> <div class="custom-spinner-box"></div> </div>',
      duration: 5000
    });
     aguardeCustom.onDidDismiss(()=>{
       alert('Aguarde foi encerrado !');

     });
     aguardeCustom.present();
  }

  salvarSemSpinner(){

    let loader = this.loadingCtrl.create({
      content:'Por Favor aguarde...',
      spinner:'hide'
    });

    setTimeout(()=>{
    console.log("Dados Salvos com sucesso !!");
    loader.dismiss();
    },5000);
 
    loader.present();
  }
}
