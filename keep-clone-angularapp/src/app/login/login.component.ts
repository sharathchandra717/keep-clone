import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "./login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly loginService:LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': ["", [
        Validators.required,
      ]],
      'password': ["", [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]]
    });
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe((result:any)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    });
  }

}
