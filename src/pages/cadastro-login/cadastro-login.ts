import { EmailValidator } from './../../validators/email';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-login',
  templateUrl: 'cadastro-login.html',
})
export class CadastroLoginPage {

  cadastroLoginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authData: AuthProvider,
    public formBuilder: FormBuilder) {
      this.cadastroLoginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required,
        EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
      });
  }

  criarUsuario() {
    // verifica se o form foi preenchido corretamente
    if (!this.cadastroLoginForm.valid) {
      console.log(this.cadastroLoginForm.value);
    } else {
      // cria Uauário
      this.authData.signupUser(this.cadastroLoginForm.value.email, this.cadastroLoginForm.value.password)
        .then(authData => {

          this.navCtrl.setRoot(LoginPage);

        }, error => {
            alert('Erro ao criar Usuário');
        });
    }
  }

  
  voltarPagina(){
    this.navCtrl.pop();
  }

  
}
