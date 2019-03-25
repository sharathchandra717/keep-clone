import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hide = true;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'firstname': ["", [
        Validators.required
      ]],
      'lastname': ["", [
        Validators.required
      ]],
      'username': ["", [
        Validators.required,
      ]],
      'password': ["", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  register(){
    console.log(this.registerForm.value);
  }

}
