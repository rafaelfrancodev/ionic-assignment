import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'profiles',
        loadChildren: () => import('../pages/profiles/profiles.module').then(m => m.ProfilesPageModule)
      },
      {
        path: 'create-profile',
        loadChildren: () => import('../pages/create-profile/create-profile.module').then(m => m.CreateProfilePageModule)
      },     
      {
        path: '',
        redirectTo: '/tabs/profiles',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/profiles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
