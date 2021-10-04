import { INavData } from '@coreui/angular';

export const navItems: INavData[] = 
[
  {
    divider: true
  },
  {
    title: true,
    name: 'Componentes',
  },
  {
    name: 'Aplicativos',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Turno',
        url: '/login',
        icon: 'icon-cursor'
      },
      {
        name: 'Asesor',
        url: '/register',
        icon: 'icon-puzzle'
      },
      {
        name: 'Display',
        url: '/turnero',
        icon: 'icon-bell'
      },
      {
        name: 'Recuperar Turno',
        url: '/404',
        icon: 'icon-ban'
      }
    ]
  },
  
];
