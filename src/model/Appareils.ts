export  class Appareils {

  description : string[];
  isOn: boolean;
  startTime: string;
  endTime : string;

  constructor(public  title:string){
    this.isOn = false;
    this.startTime = '';
    this.endTime ='';
    this.description= [];
  }
}

/**Une fois notre Classe Creer avec ces Attribus, Nous nous somme dirigé dans notre service pour implemnter cela*/
