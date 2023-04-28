import {Component, ViewChild, OnInit} from '@angular/core';
import {MovementVehicles} from '../shared/models/movement-vehicles';
import { City } from '../shared/models/movement-vehicles';

@Component({
  selector: 'app-movement-vehicles',
  templateUrl: './movement-vehicles.component.html',
  styleUrls: ['./movement-vehicles.component.scss']
})
export class MovementVehiclesComponent implements OnInit {

  display: boolean = false;
  columns: any[] = [];
  // selectedTypeVehicle: City

  cities: City[] = [];
  @ViewChild('dt', { static: false }) dt: any;

  ngOnInit() {
    this.columns = [
      { field: 'name', header: 'Tipo de vehículo' },
      { field: 'laboratory', header: 'Placa' },
      { field: 'expiration', header: 'Hora de ingreso' },
      { field: 'manufacture', header: 'Numero de Documento' },
      { field: 'stock', header: 'Estado' },
    ];
    this.cities = [
      { name: 'Carro', code: '1' },
      { name: 'Moto', code: '2' },
      { name: 'Cicla', code: '3' },
  ];
  }

  movementVehicles: MovementVehicles[] = [
    {
      name: 'Carro',
      laboratory: 'xcy521',
      expiration: '02:30pm',
      manufacture: '1091632554',
      stock: 'ingreso',
    },
    {
      name: 'Moto',
      laboratory: 'ymk66c',
      expiration: '08:00am',
      manufacture: '88374640',
      stock: 'ingreso',
    },
    {
      name: 'Cicla',
      laboratory: '',
      expiration: '06:00am',
      manufacture: '1091365284',
      stock: 'ingreso',
    },
    {
      name: 'Carro',
      laboratory: 'xcy521',
      expiration: '02:30pm',
      manufacture: '1091632554',
      stock: 'ingreso',
    },
    {
      name: 'Moto',
      laboratory: 'ymk66c',
      expiration: '08:00am',
      manufacture: '88374640',
      stock: 'ingreso',
    },
    {
      name: 'Cicla',
      laboratory: '',
      expiration: '06:00am',
      manufacture: '1091365284',
      stock: 'ingreso',
    },
    {
      name: 'Carro',
      laboratory: 'xcy521',
      expiration: '02:30pm',
      manufacture: '1091632554',
      stock: 'ingreso',
    },
    {
      name: 'Moto',
      laboratory: 'ymk66c',
      expiration: '08:00am',
      manufacture: '88374640',
      stock: 'ingreso',
    },
    {
      name: 'Cicla',
      laboratory: '',
      expiration: '06:00am',
      manufacture: '1091365284',
      stock: 'ingreso',
    },
    {
      name: 'Carro',
      laboratory: 'xcy521',
      expiration: '02:30pm',
      manufacture: '1091632554',
      stock: 'ingreso',
    },
    {
      name: 'Moto',
      laboratory: 'ymk66c',
      expiration: '08:00am',
      manufacture: '88374640',
      stock: 'ingreso',
    },
    {
      name: 'Cicla',
      laboratory: '',
      expiration: '06:00am',
      manufacture: '1091365284',
      stock: 'ingreso',
    },
  ];


  showDialog() {
    this.display = true;
  }

  onData() {
    // console.log(this.data)
  }

  deleteDrug(index: number) {
    this.movementVehicles.splice(index, 1)
  }

}
