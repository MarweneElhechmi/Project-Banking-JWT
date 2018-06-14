import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';


  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }
  isLoggedIn():boolean{
    return this.authenticationService.isLoggedIn();
  }

  onLogOut(){
    this.loading = true;

 this.authenticationService.logout();

}

getJwtSuject():string{

return this.authenticationService.getJwtSuject();
}

}
