import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent {

  idfournisseur: number = 1
  code: string = 'A104B89'
  libelle: string = 'My teck'
  hide: boolean = false


  change(){
    this.hide=true
  }

  cacher(){
    this.idfournisseur=0
    this.code=' '
    this.libelle= ' '
  }

  
}
