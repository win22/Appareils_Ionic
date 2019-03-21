import {Component, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {AppareilsService} from "../service/appareils.service";
import {Appareils} from "../../model/Appareils";
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-appareil-form',
  templateUrl: './appareil-form.html'
})
// dans la creation de notre page on ajoute cette implementation afin d'initialiser le formulaire
export class AppareilFormPage  implements OnInit{
  appareilForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private appareilService: AppareilsService, private navCtl: NavController){

  }

  /**Pour intégrer la fonctionnalité du  FormArray , il faut une méthode qui le retourne sous forme de  FormArray  (sans oublier d'importer  FormArray  depuis  @angular/forms ) **/
   ngOnInit(): void {
    this.initForm();

   }

   initForm(){
    this.appareilForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: this.formBuilder.array([])
    });
   }

   //avant d'utiliser un attribu de type array faut d'abord le declarer
  getDescriptionArray(){
    return this.appareilForm.get('description') as FormArray;
  }
  //cette methode me permet d'ajouter une description
  onAddDescription(){
    let newControl = this.formBuilder.control('');
    this.getDescriptionArray().controls.push(newControl);
  }

  // cette methode me permet de retirer une description
  onRemoveDesciption(index: number){
    this.getDescriptionArray().removeAt(index);

  }

  onSubmitForm(){
    let newAppareil =  new Appareils(this.appareilForm.get('title').value);
    for (let control of this.getDescriptionArray().controls){
       newAppareil.description.push(control.value);
    }
    this.appareilService.addAppareil(newAppareil);
    this.navCtl.pop();
  }
}
