import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/core/models/level.model';
import { User } from 'src/app/core/models/user.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  hidePassword = true;
  newUser:User={
    email:'',
    password:'',
    username:'',
    firstName:'',
    lastName:'',
    dateOfBirth:new Date(),
    address:'',
    city:'',
    country:'',
    phoneNumber:'',
    role:Role.User,
    isApproved:true
  }
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService:AuthenticationService
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      date: ['']
    });
  }

  ngOnInit(): void {
  }
  get register(): { [key: string]: AbstractControl; } { return this.registerForm.controls; }
  
  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (!this.checkPassword()) {
      alert('Password and confirm password are not the same! Please try again!');
      return;
    }
    this.newUser.username = this.registerForm.value.username;
    this.newUser.firstName = this.registerForm.value.firstName;
    this.newUser.lastName = this.registerForm.value.lastName;
    this.newUser.password = this.registerForm.value.password;
    this.newUser.email = this.registerForm.value.email;
    this.newUser.address = this.registerForm.value.address;
    this.newUser.city = this.registerForm.value.city;
    this.newUser.country = this.registerForm.value.country;
    this.newUser.dateOfBirth = this.registerForm.value.date;
    this.newUser.phoneNumber = this.registerForm.value.phoneNumber;
    this.newUser.firstName='sdfdsfs';
    console.log(this.newUser);
    this.authenticationService.register(this.newUser).subscribe((res: any) => {
      
      alert('Sucessfully registered! Please check your e-mail to confirm your registration!')
      // this.router.navigate(['/registration-success']);
    },
      error => {
        console.log(error.error);
        alert('Error! Try again!');
      });
  }

  checkPassword(): boolean {
    if (this.registerForm.value.password === this.registerForm.value.confirmPassword)
      return true;
    return false;
  }
}
