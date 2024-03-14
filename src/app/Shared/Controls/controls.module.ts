import { NgModule } from "@angular/core";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CheckboxControlComponent } from "./check-box-control/check-box-control.component";
import { ControlsService } from "../Services/controls.service";
import { RadioControlComponent } from "./radio-control/radio-control.component";

@NgModule({
  declarations: [
    CheckboxControlComponent,
    RadioControlComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [ControlsService, {
    provide: FormBuilder, useValue: new FormBuilder()
  }],
  bootstrap: [],
  
  exports: [CheckboxControlComponent, RadioControlComponent]
})
export class ControlsModule { }
