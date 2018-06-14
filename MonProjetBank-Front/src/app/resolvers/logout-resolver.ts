import { AuthenticationService } from "../services/authentication-service.service";
import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LogoutResolver implements Resolve<any>{

  constructor(private authenticationService:AuthenticationService){}

  resolve(){
  if(localStorage.getItem('currentUser'))
  this.authenticationService.logout();
  }

}
