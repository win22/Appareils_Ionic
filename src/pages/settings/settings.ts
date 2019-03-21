import {Component} from "@angular/core";
import {AlertController} from "ionic-angular";

@Component({
  selector : 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {

  // Nous avons eu besoind d'importer AlertControleur pour pouvoir utiliser une Alerte
  constructor(private  alertCtl: AlertController){

  }

  //Nous avons créer cette methode pour stimuler une alerte
  onToggleLight(){
    let alert = this.alertCtl.create({
      title: 'Attention !',
      subTitle: 'Etes vous sure de vouloir Continuer?',
      message: 'Cette action eteindra toutes les lumieres de la maison',
      buttons: [
        {
        text: 'Annuler',
        role:  'cancel'
      },
        {
          text: 'Confirmer',
          handler: ()=> console.log('confirmer')
        }
      ]
    });
    alert.present();

  }
  
}
