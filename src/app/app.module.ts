import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RIRSComponent } from './Components/RIRS/RIRS.component';
import { FistulaComponent } from './Components/Fistula/Fistula.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommorbitiesComponent } from './Components/commorbities/commorbities.component';
import { DiagnosisComponent } from './Components/diagnosis/diagnosis.component';
import { PriorStuntDetailsComponent } from './Components/prior-stunt-details/prior-stunt-details.component';
import { IntraOperativeFindingsComponent } from './Components/intra-operative-findings/intra-operative-findings.component';
import { TestComponent } from './test/test.component';
import { ControlsModule } from './Shared/Controls/controls.module';

@NgModule({
  declarations: [
    AppComponent,
    RIRSComponent,
    FistulaComponent,
    UserDetailsComponent,
    CommorbitiesComponent,
    DiagnosisComponent,
    PriorStuntDetailsComponent,
    IntraOperativeFindingsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [RadioSelectionValues]
})
export class AppModule { }
