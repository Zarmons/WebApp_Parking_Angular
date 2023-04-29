import {Component, ViewChild, OnInit} from '@angular/core';
import {MovementVehicles} from '../shared/models/movement-vehicles';

@Component({
  selector: 'app-movement-vehicles',
  templateUrl: './movement-vehicles.component.html',
  styleUrls: ['./movement-vehicles.component.scss']
})
export class MovementVehiclesComponent implements OnInit {
  display: boolean = false;
  columns: any[] = [];
  types: any[] = [];

  constructor() { }

  ngOnInit():void {
    this.columns = [
      { field: 'typeVehicles', header: 'Tipo de vehículo' },
      { field: 'placa', header: 'Placa' },
      { field: 'timeEntry', header: 'Hora de ingreso' },
      { field: 'documentNumber', header: 'Numero de Documento' },
      { field: 'status', header: 'Estado' },
    ];
    this.types = [
      { type: 'Carro', value: '1' },
      { type: 'Moto', value: '2' },
      { type: 'Cicla', value: '3' },
  ];
  }

  showDialog() {
    this.display = true;
  }

  onData() {
    // console.log(this.selectedCity1)
  }

  deleteDrug(index: number) {
    this.movementVehicles.splice(index, 1)
  }
  movementVehicles: MovementVehicles[] = [
    {
      typeVehicles: 'Carro',
      placa: 'xcy521',
      timeEntry: '02:30pm',
      documentNumber: '1091632554',
      status: 'ingreso',
    },
    {
      typeVehicles: 'Moto',
      placa: 'ymk66c',
      timeEntry: '08:00am',
      documentNumber: '88374640',
      status: 'ingreso',
    },
    {
      typeVehicles: 'Cicla',
      placa: '',
      timeEntry: '06:00am',
      documentNumber: '1091365284',
      status: 'ingreso',
    },
    {
      typeVehicles: 'Carro',
      placa: 'xcy521',
      timeEntry: '02:30pm',
      documentNumber: '1091632554',
      status: 'ingreso',
    },
    {
      typeVehicles: 'Moto',
      placa: 'ymk66c',
      timeEntry: '08:00am',
      documentNumber: '88374640',
      status: 'ingreso',
    },
    {
      typeVehicles: 'Cicla',
      placa: '',
      timeEntry: '06:00am',
      documentNumber: '1091365284',
      status: 'ingreso',
    },
    {
      typeVehicles: 'Carro',
      placa: 'xcy521',
      timeEntry: '02:30pm',
      documentNumber: '1091632554',
      status: 'ingreso',
    },
    {
      typeVehicles: 'Moto',
      placa: 'ymk66c',
      timeEntry: '08:00am',
      documentNumber: '88374640',
      status: 'ingreso',
    },
    {
      typeVehicles: 'Cicla',
      placa: '',
      timeEntry: '06:00am',
      documentNumber: '1091365284',
      status: 'ingreso',
    },
    {
      typeVehicles: 'Carro',
      placa: 'xcy521',
      timeEntry: '02:30pm',
      documentNumber: '1091632554',
      status: 'ingreso',
    },
    {
      typeVehicles: 'Moto',
      placa: 'ymk66c',
      timeEntry: '08:00am',
      documentNumber: '88374640',
      status: 'ingreso',
    },
    {
      typeVehicles: 'Cicla',
      placa: '',
      timeEntry: '06:00am',
      documentNumber: '1091365284',
      status: 'ingreso',
    },
  ];
}
