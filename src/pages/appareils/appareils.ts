// creer le compoment coorespondant à la page
import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoadingController, MenuController, ModalController, NavController, ToastController} from "ionic-angular";
import {SingleAppareilPage} from "./single-appareil/single-appareil";
import {AppareilsService} from "../service/appareils.service";
import {Appareils} from "../../model/Appareils";
import {AppareilFormPage} from "../appareil-form/appareil-form";
import {Subscription} from "rxjs";


// ceci est un decorateur
@Component ({
  
  selector : 'page-appareils',
  templateUrl: 'appareils.html'
  
})
export  class AppareilsPage implements OnInit, OnDestroy{

  appareilsList: Appareils[];
  appareilsSubscription: Subscription;



  constructor(private modalCtl: ModalController,
              private menuCtl : MenuController,
              private navCtl : NavController,
              private toastCtl: ToastController,
              private loadinCtl: LoadingController,
              private  appareilService: AppareilsService){

  }
  ngOnInit(){

    //Maintenant nous aurons une subscription à creer
    this.appareilsSubscription = this.appareilService.appareils$.subscribe(
      //on reçoit un tableau de type appareil
      (appareils: Appareils[])=> {
        this.appareilsList = appareils;
      }
    );
    //Une fois que nous avons notre appareil nous allons faire emmettre une liste
    this.appareilService.emitAppareils();
  }


  onLoadAppareils(index: number){
    let modal = this.modalCtl.create(SingleAppareilPage, {index: index});
    modal.present();
  }
  onToggleMenu(){
    this.menuCtl.open();
  }

  onNewAppareil(){
    this.navCtl.push(AppareilFormPage);
  }

  //Methode pour enregistrer les information dans la base de donnée
  onSaveList(){
    let loader = this.loadinCtl.create({
      content: 'Sauvegarder en cours...'
    });
    loader.present();
    this.appareilService.saveData().then(
      ()=>{
        loader.dismiss();
        this.toastCtl.create({
          message : 'Données sauvegardées !',
          duration: 4000,
          position: 'bottom'
        }).present();
      }
    ).catch(
      (error)=> {
        loader.dismiss();
        this.toastCtl.create({
          message: error,
          duration: 4000,
          position: 'bottom'
        }).present();
      }
    );
  }

  onFetchist(){
    let loader = this.loadinCtl.create({
      content: 'Récupération en cours...'
    });
    loader.present();
    this.appareilService.retrieveData().then(
      ()=>{
        loader.dismiss();
        this.toastCtl.create({
          message : 'Données récupérées !',
          duration: 4000,
          position: 'bottom'
        }).present();
      }
    ).catch(
      (error)=> {
        loader.dismiss();
        this.toastCtl.create({
          message: error,
          duration: 4000,
          position: 'bottom'
        }).present();
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    //Pour eviter tout compertement inatendu
    this.appareilsSubscription.unsubscribe();
  }

}
