import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RegisterService } from "./register.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  hide = true;


  constructor(private readonly formBuilder: FormBuilder,
    private readonly registerService: RegisterService,
    private readonly router:Router) { }

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

  register() {
    this.registerService.register(this.registerForm.value).subscribe((result:any) => {
      console.log(result);
      if (result.exists === true) {
        alert("Username already exists please try with new one.")
      }
      else{
        if(result.success===true){
          alert("Account created successfully");
          this.router.navigate(['/login']);
        }
        else{
          alert("Something went wrong.");
        }
      }
    }, (err) => {
      console.log(err);
    });
  }

}
