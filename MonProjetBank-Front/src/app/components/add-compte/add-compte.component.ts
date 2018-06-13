import { Component, OnInit } from '@angular/core';
import { Compte } from '../../interfaces/compte';
import { ComptesService } from '../../services/comptes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css']
})
export class AddCompteComponent implements OnInit {

  //Il faut l'initialisation de l'interface pour la validation côté HTML
  compte:Compte={
    'numero':'',
    'proprietaire':'',
    'solde':0
  };

  constructor(private serviceCompte:ComptesService,private router: Router) { }

  ngOnInit() {
  }

  OuvrirCompte(dataForm){
    this.serviceCompte.addCompte(dataForm).
    subscribe(data=>{
      console.log(data);
      this.router.navigate(['/list']);
    },err=>{
      console.log(JSON.parse(err._body).message);
    })
  }

    //Fonction Fait dans la Formation
  // OuvrirCompteModel(){
  //   this.serviceCompte.addCompte(this.compte).
  //   subscribe(data=>{
  //     console.log(data);
  //     this.router.navigate(['/list']);
  //   },err=>{
  //     console.log(JSON.parse(err._body).message);
  //   })
  // }
}
