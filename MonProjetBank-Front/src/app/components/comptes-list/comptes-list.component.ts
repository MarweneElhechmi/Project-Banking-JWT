import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ComptesService } from '../../services/comptes.service';
import { Compte } from '../../interfaces/compte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptes-list',
  templateUrl: './comptes-list.component.html',
  styleUrls: ['./comptes-list.component.css'],
  animations: [routerTransition()]

})
export class ComptesListComponent implements OnInit {

  cols: any[];
  data: Compte[];
  PageCompte:any;

  constructor(private service: ComptesService,private router:Router) { }

  ngOnInit() {
    this.cols = [
      { field: 'numero', header: 'Numéro' },
      { field: 'proprietaire', header: 'Propriétaire' },
      { field: 'solde', header: 'solde' },
  ];

    this.service.getAllCompte().subscribe(
      data=>{ this.data=data
      },err=>{
        console.log(err);
        console.log(`Attention, il y a une erreur ${err}`)
      }
    );
  }
}
