import {Component, ViewChild} from '@angular/core';
import {MenuController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase'
import {TabsPage} from "../pages/tabs/tabs";
import {OptionsPage} from "../pages/options/options";
import {AuthPage} from "../pages/auth/auth";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage : any = TabsPage;
  optionsPage: any = OptionsPage;
  //Pour le mode de connection
  authPage: any = AuthPage;

  //Pour le menu lateral
  @ViewChild('content') content

  //Pour l'etat de connexion
  isAuth: boolean;
  constructor(platform: Platform, statusBar: StatusBar,
              private menuCtl: MenuController,
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Initialize Firebase
      let config = {
        apiKey: "AIzaSyAK6hWnf3w9Y97hpkv4OiQ3uee0fjRN0dc",
        authDomain: "openappclass.firebaseapp.com",
        databaseURL: "https://openappclass.firebaseio.com",
        projectId: "openappclass",
        storageBucket: "openappclass.appspot.com",
        messagingSenderId: "670359302944"
      };
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(
        (user)=>{
          if(user){
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          }else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      )

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onNavigate(page: any, data?:{}){
    this.content.setRoot(page, data ? data :null);
    this.menuCtl.close();
  }

  onDisconnect(){
    firebase.auth().signOut();
    this.menuCtl.close();
  }
}

