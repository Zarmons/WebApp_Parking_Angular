import { Component, ViewChild, OnInit } from '@angular/core';
import { Report } from '../shared/models/report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  display: boolean = false;
  columns: any[] = [];

  ngOnInit() {
    this.columns = [
      { field: 'name', header: 'Tipo de vehículo' },
      { field: 'laboratory', header: 'Placa' },
      { field: 'expiration', header: 'Hora de ingreso' },
      { field: 'manufacture', header: 'Hora de salida' },
      { field: 'stock', header: 'Valor' },
      { field: 'stock', header: 'Estado' },
    ];
  }

  report: Report[] = [
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
}
