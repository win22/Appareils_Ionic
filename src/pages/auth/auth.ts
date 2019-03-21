import {Component, OnInit} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {MenuController, NavController, NavParams} from "ionic-angular";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-auth',
  templateUrl: './auth.html'
})
export  class AuthPage  implements  OnInit{

  mode: string;
  authForm: FormGroup;
  errorMessage: string;
  constructor(
    private authService: AuthService,
    private menuCtl: MenuController,
    private formBuilder: FormBuilder,
    private navCtl: NavController,
    private navParams: NavParams){

  }
  ngOnInit(): void {
    this.mode = this.navParams.get('mode');
    this.initForm();
  }


  onToggleMenu(){
    this.menuCtl.open();
  }

  initForm(){
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitForm(){
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    if (this.mode === 'new'){
      this.authService.signUpUser(email, password).then(
        () =>{
          this.navCtl.setRoot(TabsPage);
        }
      ).catch(
        (error) => {
        this.errorMessage = error;
      }
      )
    }else if (this.mode === 'connect'){
      this.authService.signInUser(email, password).then(
        ()=>{
          this.navCtl.setRoot(TabsPage);
        }
      ).catch(
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }
  
}
