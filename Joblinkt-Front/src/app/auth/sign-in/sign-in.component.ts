import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMatcher } from 'src/app/core/error/error-matcher';
import { UserSignIn } from 'src/app/core/models/user-sign-in.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CompanyService } from 'src/app/core/services/company.service';
import { JwtService } from 'src/app/core/services/jwt.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  hidePassword = true;
  matcher: ErrorMatcher = new ErrorMatcher();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private jwtService: JwtService,
    private authenticationService:AuthenticationService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  get login(): { [key: string]: AbstractControl; } { return this.loginForm.controls; }
  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const login: UserSignIn = { username: '', password: '' };
    login.username = this.loginForm.value.username;
    login.password = this.loginForm.value.password;
    console.log(login)
    this.authenticationService.signIn(login).subscribe((data: any) => {
      if(data==null){
        alert('Username od password invalid! Try again!');
        this.loginForm.reset();
      }
      else{
        this.jwtService.saveUserDetails(data);
        this.router.navigate(['/dashboard']);  
      }
    },
      error => {
        alert(error.error.message);
      });


  }


}
