import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { TurneroComponent } from './views/turnos/turnero/turnero.component';
import { LoginComponent } from './views/usuarios/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Inicio'

    },
    
    children: [
      {
        path: 'turnero',
        loadChildren: () => import('./views/turnos/turnos.module').then(m => m.TurnosModule)
      },
       {
        path: 'usuarios',
        loadChildren: () => import('./views/usuarios/usuarios.module').then(m => m.UsuariosModule)
      }
    ]
  },
 // { path: '**', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


