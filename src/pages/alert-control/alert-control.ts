import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlertControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert-control',
  templateUrl: 'alert-control.html',
})
export class AlertControlPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertControlPage');
  }

  alertcontroller() {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: 'Curso de ionic',
      buttons: [{
        text: "Fechar",
        role: 'cancel',

      }]
    }).present();
  }

  alertConfirm() {
    this.alertCtrl.create({
    title:'Confirmar Compra',
    message:'Tem certeza que deseja comprar este livro ?',
    buttons:[{
      text:'Cancelar',
      role:'cancel',
      handler:()=>{
        console.log("compra cancelada");
      }

    },{
      text:'Comprar',
      handler:()=>{
        console.log("Compra realizada com sucesso !!!");
      }
    }]

    }).present();

  }


  alertEnter() {
    this.alertCtrl.create({
      title:'Acesso restrito',
      inputs:[{
        name:'Login',
        placeholder:'Login'
      },{
        name:'Senha',
        placeholder:'Senha',
        type: 'password'
      }],
      buttons:[{
        text:'Cancelar',
        role:'cancel',
        handler: data =>{
          console.log('handler = ',data);
        }
      },{
        text:'Entrar',
        handler: data =>{
          console.log(data);
          if(data.Login == 'felipe' && data.Senha == "123"){
            console.log('autenticado');
          }else{
            console.log('erro');
          }
        }
      }]
    }).present();
  }


  alertRadio(){
    let alert = this.alertCtrl.create();

    alert.setTitle('Escolha uma cor');
    alert.addInput({
      type:'radio',
      label:'Azul',
      value:'blue',
      checked:true
    });
    alert.addInput({
      type:'radio',
      label:'Vermelho',
      value:'red',
      checked:false
    });
    alert.addInput({
      type:'radio',
      label:'Verde',
      value:'green',
      checked:false
    });

    alert.addButton("Cancelar");

    alert.addButton({
      text:'OK',
      handler:(data:any)=>{
        console.log('Cor Selecionada',data);

      }
    });
    alert.present();
  }


  alertCheck(){
    let alert = this.alertCtrl.create({
      title:'Quais frutas voce gosta ?',
      inputs:[{
        type: 'checkbox',
        label:'Laranja',
        value:'Orange',
        checked: true
      },{
        type: 'checkbox',
        label:'Banana',
        value:'Banana',
        checked: false
      },{
        type: 'checkbox',
        label:'Maça',
        value:'Apple',
        checked: false
      }],
      buttons:[{
        text:'Cancelar',
        role:'cancel'
      },{
        text:'OK',
        handler:(data:any)=>{
          console.log("Selecionou as frutas =" ,data);
        }
      }]
    }).present();
  }

}
