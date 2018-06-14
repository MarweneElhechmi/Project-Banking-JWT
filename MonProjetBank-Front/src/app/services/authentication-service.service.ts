import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: HttpClient) { }
  url_auth="http://localhost:8080/auth"

    login(username: string, password: string) {
        return this.http.post<any>(this.url_auth, { username: username, password: password })
            .pipe(map((res:any) => {
                // login successful if there's a jwt token in the response
                if (res && res.token) {

                  //Debbuging angular-jwt Library
                //  const helper = new JwtHelperService();
                  //console.log("**** JETON DECODE à partir du local storage");
                    // const decodedToken = helper.decodeToken(res.token);
                    // const expirationDate = helper.getTokenExpirationDate(res.token);
                    // const isExpired = helper.isTokenExpired(res.token);

                  // console.log("**** JETON DECODE à la réception"+JSON.stringify(decodedToken))
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                     localStorage.setItem('currentUser', JSON.stringify({ username, token: res.token }));
                    // let content = localStorage.getItem('currentUser');
                    //  let content_token_parsed = helper.decodeToken(JSON.parse(content).token);
                    // console.log("**** JETON DECODE à partir du local storage"+JSON.stringify(content_token_parsed.sub))
                    // console.log("**** JETON DECODE à partir du local storage"+JSON.stringify(content_token_parsed))

                  }
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    isLoggedIn():boolean{
      const token = localStorage.getItem('currentUser');
      return (token) ? true : false;
    }

    getJwtSuject():string{
      let stored = localStorage.getItem('currentUser');
      const helper = new JwtHelperService();
      if(stored){
          return helper.decodeToken(JSON.parse(stored).token).sub;
      }
      return null;

}
}
