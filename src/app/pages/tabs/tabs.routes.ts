import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tabsRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'wizards',
        title: 'Wizards',
        loadComponent: () => import('../wizards/wizards.page').then( m => m.WizardsPage)
      },
      {
        path: 'wizard/:id',
        title: 'Wizard Details',
        loadComponent: () => import('../wizard/wizard.page').then( m => m.WizardPage)
      },
      {
        path: 'secret-wizard',
        title: 'Wizard Details',
        loadComponent: () => import('../secret/secret.page').then( m => m.SecretPage)
      },
      {
        path: 'spells',
        title: 'Spells',
        loadComponent: () => import('../spells/spells.page').then( m => m.SpellsPage)
      },
      {
        path: '',
        redirectTo: 'wizards',
        pathMatch: 'full',
      },
    ],
  },
];
