import {Appareils} from "../../model/Appareils";
import {Subject} from "rxjs";

//Importation de firebase Pour lier nos information à la base de donnée
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class AppareilsService {

  appareils$ = new Subject<Appareils[]>();

  appareilsList: Appareils[] = [
    {
      title: 'Machine à laver',
      description :  [
        'Volume: 6 litres',
        'Temps de lavage: 2 heures',
        'Consommation: 173KWh/an'
      ],
      isOn :  true,
      startTime: '',
      endTime : ''
    },

    {
      title: 'Télévision',
      description :  [
        'Dimmension: 40 pouces',
        'Consommation: 22KWh/an'
      ],
      isOn :  true,
      startTime: '',
      endTime : ''
    },
    {
      title: 'Ordinateur',
      description :  [
        'Marque: fait maison',
        'Consommation: 500KWh/an'
      ],
      isOn :  false,
      startTime: '',
      endTime : ''
    }
  ];

  addAppareil(appareil: Appareils){
    this.appareilsList.push(appareil)
    this.emitAppareils();
  }

  emitAppareils(){
    this.appareils$.next(this.appareilsList.slice());
  }

  /**Methode pour sauvegarder un appareil dans la base de donné*/
  saveData(){
    return new Promise((resolve, reject)=> {
      firebase.database().ref('appareils').set(this.appareilsList).then(
          (data: DataSnapshot) => {
            resolve(data)
          }).catch(
        (error)=>{
          reject(error);
        });
    });
  }
  retrieveData(){
    return new Promise((resolve, reject)=> {
        firebase.database().ref('appareils').once('value').then(
          (data: DataSnapshot) => {
            this.appareilsList = data.val();
            this.emitAppareils();
            resolve('DOnnées récupérées avec succès !');
          }).catch(
          (error) => {
            reject(error);
          });
      });
  }

}
/**
 * on acced à firebase database pour avoir les methodes lier à la base de donnée
 * .ref pour recuperer une reference au node de la base de donnée, donc on cree un node appareil
 * .set qui va enregistrer this.appareilsList au node appareil, le .set veut aussi dire qu'il va remplacer toute donnée
 * qui s'y trouve donc on ne se retrouvera pas avec plusier  copie de ddonnée
 * Et comme s'est une methode asynchrone on cree notre .then
 *
 * se call back reçoi un DataSnapshot
 * */




/**une fois le service creer faudra l'ajouter dans  notre app.module.ts precisemnent dans les providers*/
