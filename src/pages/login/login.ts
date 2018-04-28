import { HomePage } from './../home/home';
import { EmailValidator } from './../../validators/email';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { CadastroLoginPage } from '../cadastro-login/cadastro-login';
import { CadastroLocalPage } from '../cadastro-local/cadastro-local';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;


  constructor(public navCtrl: NavController,  public authData: AuthProvider,
    public formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required,
      EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6),
      Validators.required])]
    });
  }


  voltarPagina() {
    this.navCtrl.pop();
  }

  loginUser() {
    // verifica se o form foi preenchido corretamente
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      // faz login usando o provider auth
      this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then(authData => {

          this.navCtrl.setRoot(HomePage);

        }, error => {
            alert('Login / senha incorretos');
        });

    }
  }

  cadastrar(){
    console.log("Passou aqui")
    this.navCtrl.push(CadastroLoginPage);

  }

}
