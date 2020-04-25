import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { environment as env } from '@env/environment';

const moduleName = 'landing';

const routes: Routes = [{
  path: '',
  component: LandingComponent,
  data: { page: `${env.project}-${moduleName}-index` }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
