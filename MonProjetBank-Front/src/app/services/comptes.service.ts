import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte } from '../interfaces/compte';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  url: string="http://localhost:8080/biat/comptes";
  urlAdd: string="http://localhost:8080/biat/saveCompte";

  constructor(private http:HttpClient) { }

  getAllCompte(): Observable<Compte[]>
{
        return this.http.get<Compte[]>(this.url).pipe(
          tap(console.log) //Afficher le Json sur la Console
        );
}

addCompte(c : Compte):Observable<Compte>
{
  return this.http.post<Compte>(this.urlAdd,c);
}

deleteCompte(numero:String): Observable<{}>
{
        return this.http.delete("http://localhost:8080/biat/deleteCompte/"+numero);
}

getCompteByNumero(numero:String): Observable<Compte>
{
        return this.http.get<Compte>("http://localhost:8080/biat/comptes/"+numero);
}
}



