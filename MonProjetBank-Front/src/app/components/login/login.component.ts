import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthenticationService } from '../../services/authentication-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  user:User = new User();

  constructor(private authenticationService:AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

  // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

// convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

  onSubmit(){
    this.loading = true;

 this.authenticationService.login(this.user.username, this.user.password)
 .subscribe(
     data => {
         this.router.navigate([this.returnUrl]);
     },
     error => {
         this.error = error;
         this.loading = false;
     });
   }

  }
