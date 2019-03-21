import {Component, OnInit} from '@angular/core';
import {MenuController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Appareils} from "../../../model/Appareils";
import {AppareilsService} from "../../service/appareils.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})

//
export class SingleAppareilPage implements  OnInit{
  index : number;
  appareil: Appareils;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private appareilService : AppareilsService,
              public menuCtl: MenuController,
              // est utiliser afin de fermer une modal
              private ViewCtl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleAppareilPage');
  }

  //est une methode qui permet de charger les information lorsque la page se lance
  ngOnInit(): void {
    // je recupere mes informations avec la notion d'index'
    this.index = this.navParams.get('index');
    this.appareil = this.appareilService.appareilsList[this.index];
  }

  //methode qui permet de fermer mon modal
  dismissModal(){
    this.ViewCtl.dismiss();
  }

  //Methode pour allumer un Appareil
  onToggleAppareil(){
    /**A ce niveau ma methode permet simplement de faire le contraire de l'etait de isOn*/
    this.appareil.isOn = !this.appareil.isOn
  }


  /**Pour l'instant, la méthode  onSubmitForm()  ne fera qu'une  console.log() , simplement pour montrer que les
   * données sont disponibles et fonctionnent. Dans ce component, vous manipulez déjà l'appareil du service,
   * donc les champs du formulaire qui emploient la liaison à double sens modifient directement l'appareil et vous n'avez pas
   * besoin de manipuler les données qui s'y trouvent.  La méthode ferme ensuite la modal pour que l'utilisateur comprenne que
   * ses changements ont bien été enregistrés.  La méthode  onDeleteHours()  remet à zéro les horaires et ferme la modal.

   Grâce à ce formulaire géré par la méthode template, vos utilisateurs peuvent ajouter des heures d'allumage et d'extinction
   pour leurs appareils électriques.  Prochaine étape : créer un formulaire permettant aux utilisateurs de créer leur propre
   appareil.*/

  onSubmitForm(form: NgForm){
    console.log(form.value);
    this.dismissModal()
  }

  onDeleteHours(){
  this.appareil.startTime = '';
  this.appareil.endTime = '';
  this.dismissModal();
  }
}
