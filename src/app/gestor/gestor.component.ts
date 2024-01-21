import { Component, OnInit } from '@angular/core';
import { diseno } from './estilo/diseno';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestor',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.scss'], // Cambiado de styleUrl a styleUrls
})
export class GestorComponent implements OnInit {
  gestorList: diseno[] = [];
  
  diseno: any = {
    distancia: 0,
    kilometrosgalon: 0,
    costogalon: 0,
    costopeaje: 0,
  };
  
  ngOnInit(): void {
    this.gestorList=localStorage.getItem('diseno') ? JSON.parse(localStorage.getItem('diseno')!): []
  }
  onSubmit(formValue: diseno){
    this.gestorList.push(formValue)
    localStorage.setItem('diseno',JSON.stringify(this.gestorList))
    console.log(formValue)
}

onRemove (index:number){
  this.gestorList.splice (index,1)
}
}