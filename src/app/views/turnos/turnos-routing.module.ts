import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurneroComponent } from './turnero/turnero.component';

const routes: Routes = [
  {
    path: '',
    component: TurneroComponent,
    data: {
      title: 'Turnero'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TurnosRoutingModule { }
