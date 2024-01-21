import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalleViajeDialogComponent } from './detalle-viaje-dialog/detalle-viaje-dialog.component';
import { diseno } from './estilo/diseno';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.scss'],
})
export class GestorComponent implements OnInit {
  gestorList: diseno[] = [];
  diseno: any = {
    distancia: 0,
    kilometrosgalon: 0,
    costogalon: 0,
    costopeaje: 0,
    costoAproximado: 0,
    duracionAproximada: 0,
  };

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.gestorList = localStorage.getItem('diseno') ? JSON.parse(localStorage.getItem('diseno')!) : [];
  }

  onSubmit(formValue: diseno): void {
    const velocidadConstante = 60; // en Km/h

    const duracionAproximada = formValue.distancia / velocidadConstante;
    const costoAproximado =
      (formValue.distancia / formValue.kilometrosgalon) * formValue.costogalon + formValue.costopeaje;

    formValue.duracionAproximada = duracionAproximada;
    formValue.costoAproximado = costoAproximado;

    this.gestorList.push(formValue);
    localStorage.setItem('diseno', JSON.stringify(this.gestorList));
    console.log(formValue);
  }

  onRemove(index: number): void {
    this.gestorList.splice(index, 1);
  }

  openDetalleViajeDialog(disenoItem: diseno): void {
    const dialogRef = this.dialog.open(DetalleViajeDialogComponent, {
      width: '300px', // Ajusta el ancho según tus necesidades
      data: disenoItem, // Pasa los datos al componente del cuadro de diálogo
    });

    // Opcional: Puedes realizar acciones después de cerrar el cuadro de diálogo
    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró', result);
    });
  }
}
