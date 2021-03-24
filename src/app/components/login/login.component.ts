import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /**
   * Variable que controla el modo texto o password de la contraseña
   */
  hide: boolean = true;
  /**
   * Variable que controla el modo texto o password de la contraseña
   */
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm()
  }

  ngOnInit(): void {
  }
  /**
   * Creacion de formulario para login de usuario
   */
  createForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required]],
    })
  }
  get email(){
    return this.loginForm.get('name');
  }
  get password(){
    return this.loginForm.get('password');
  }
  /**
   * Creacion de session
   */
  login(){

  }

}
