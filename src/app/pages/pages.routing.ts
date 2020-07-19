import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: {title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {title: 'ProgressBar'} },
      { path: 'graphics1', component: Graphics1Component, data: {title: 'Graphics'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'} },
      { path: 'promesas', component: PromesasComponent, data: {title: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: {title: 'RxJs'} },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
