import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/layout/nav-bar/nav-bar.component';
import { MovementVehiclesComponent } from './feature/movement-vehicles/movement-vehicles/movement-vehicles.component';
import { ReportComponent } from './feature/report/report/report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MovementVehiclesComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    TableModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
