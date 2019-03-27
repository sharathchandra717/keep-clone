import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(private readonly formBuilder: FormBuilder,
    private readonly loginService: LoginService,
    private readonly router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': ["", [
        Validators.required
      ]],
      'password': ["", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
    if (localStorage.getItem('loggedIn') === "true") {
      this.router.navigate(['/notes']);
    }
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe((result: any) => {
      // console.log(result);
      if (result.authenticated === true) {
        localStorage.setItem('loggedIn', "true");
        localStorage.setItem('id', result.uid)
        localStorage.setItem('username', result.uname)
        localStorage.setItem('firstname', result.firstname)
        localStorage.setItem('lastname', result.lastname)
        this.router.navigate(['/notes']);
      }
      else {
        alert("username or password is incorrect");
      }
    }, (err) => {
      console.log(err);
    });
  }

}
