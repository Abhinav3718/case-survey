import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RIRSComponent } from './Components/RIRS/RIRS.component';
import { RouteGuard } from './Shared/Services/route-guard.service';
import { FistulaComponent } from './Components/Fistula/Fistula.component';

const routes: Routes = [
  {
    path: 'rirs',
    component: RIRSComponent,
    canActivate: [RouteGuard]
  },
  {
    path: 'fistula',
    component: FistulaComponent,
    canActivate: [RouteGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
