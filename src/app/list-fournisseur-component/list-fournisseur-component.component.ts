import { Component } from '@angular/core';
import { fournisseur } from '../models/fournisseur';

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent {

  fournisseurs : fournisseur[]= [
    {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
    {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
    {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
    {idFournisseur:400,code:"40ABC452",libelle:"asus"}

  ]

  getColor(code: string): string {
    return code.startsWith('2A') ? 'bold' : 'normal';
  }

  getBackgroundColor(libelle: string): string {
    return libelle === 'hp' ? 'green' : 'yellow';
  }

}
