import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComptesService } from '../../services/comptes.service';
import { Compte } from '../../interfaces/compte';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-compte',
  templateUrl: './delete-compte.component.html',
  styleUrls: ['./delete-compte.component.css']
})
export class DeleteCompteComponent implements OnInit {

  numero:String;
  compte:Compte={
    'numero':'',
    'proprietaire':'',
    'solde':0
  };
  PageCompte:any;

  constructor(private activatedRoute:ActivatedRoute,private service:ComptesService,private router : Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.numero = params['numero']
  , err=>{
    console.log(JSON.parse(err._body).message);
  });

  this.service.getAllCompte().subscribe(
    PageCompte=>{ this.PageCompte=PageCompte
    },err=>{
      console.log(err);
      console.log(`Attention, il y a une erreur ${err}`)
    }
  );

  this.service.getCompteByNumero(this.numero).
  subscribe(data=>{
    this.compte=data;
      },

      err=>{
    console.log(err);
  })

  }

  /*****************************************************************************************/

                              //  DELETE 1

  onDeleteCompte(compte:Compte){
  let confirm=window.confirm("Est-vous sûre de vouloir supprimer ce compte");
    if(confirm==true){
    this.service.deleteCompte(compte.numero)
    .subscribe(data=>{
      this.PageCompte.splice(
        this.PageCompte.indexOf(compte),1

      );
      alert("Compte Supprimé")
      this.router.navigate(['list']);
    },err=>{
      console.log(err);
      alert("Erreur! Compte non supprimé");
    })
  }else{
    this.router.navigate(['list']);
  }
}

/*****************************************************************************************/
                           //  DELETE 2
  DeleteCompte(){
    let confirm=window.confirm("Est-vous sûre de vouloir supprimer ce compte");
    if(confirm==true){
      this.service.deleteCompte(this.numero)
      .subscribe(data=>{
        alert("Compte Supprimé")
        this.router.navigate(['list']);
      },err=>{
        console.log(err);
        alert("Erreur! Compte non supprimé");
      })
    }else{
    this.router.navigate(['list']);
  }
}

  annulerDelete(){
    this.router.navigate(['/list']);
  }
}


