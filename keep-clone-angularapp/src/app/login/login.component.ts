import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private readonly formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginForm =this.formBuilder.group({
      'email':["",[
        Validators.required,
        Validators.email
      ]],
      'password':["",[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

}
