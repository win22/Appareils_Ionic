import * as firebase from 'firebase';

export class AuthService {

  // Methode pour la creation d'un utilisateur

  signUpUser (email: string, password: string){
    // comme il s'agit d'une methode asynchrone
    return new Promise(
      (resolve, reject )=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          (user) => {
            resolve(user);
          }
        ).catch(
          (error) => {
            reject(error);
          }
        )
      }
    )
  }

  //Methode pour la connexion d'un utlisateur
  signInUser (email: string, password: string){
    // comme il s'agit d'une methode asynchrone
    return new Promise(
      (resolve, reject )=>{
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (user) => {
            resolve(user);
          }
        ).catch(
          (error) => {
            reject(error);
          }
        )
      }
    )
  }

  // Pour deconnecter un utilisateur
  signOut(){
    firebase.auth().signOut();
  }
}
