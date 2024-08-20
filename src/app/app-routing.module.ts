import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RIRSComponent } from './Components/RIRS/RIRS.component';
import { RouteGuard } from './Shared/Services/route-guard.service';
import { FistulaComponent } from './Components/Fistula/Fistula.component';
import { IntraOperativeFindingsComponent } from './Components/intra-operative-findings/intra-operative-findings.component';

const baseRIRSpage = 'rirs';
const baseFistulaPage = 'fistula';

const routes: Routes = [
  {
    path: baseRIRSpage,
    component: RIRSComponent,
    canActivate: [RouteGuard]
  },
  {
    path: `${baseRIRSpage}/introoperative`,
    component: IntraOperativeFindingsComponent
  },
  {
    path: baseFistulaPage,
    component: FistulaComponent,
    // canActivate: [RouteGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
