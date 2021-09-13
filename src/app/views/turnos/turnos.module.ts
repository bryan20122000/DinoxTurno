import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnosRoutingModule } from './turnos-routing.module';
import { TurneroComponent } from './turnero/turnero.component';


@NgModule({
  declarations: [
    TurneroComponent
  ],
  imports: [
    CommonModule,
    TurnosRoutingModule
  ]
})
export class TurnosModule { }
