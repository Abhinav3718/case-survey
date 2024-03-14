import { Component, OnInit } from '@angular/core';
import { INTRA_OPERATIVE_FINDINGS, InputTypes, Types } from '../../Shared/Models/SurveyDetails';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-intra-operative-findings',
  templateUrl: './intra-operative-findings.component.html',
  styleUrl: './intra-operative-findings.component.css'
})
export class IntraOperativeFindingsComponent implements OnInit {
  title = 'Intraoperative Findings';

  intraOperativeMetrics: Types[] = INTRA_OPERATIVE_FINDINGS;

  formGroup!: FormGroup;

  // {
  //   name: new FormControl('', [Validators.required]),
  //   age: new FormControl('', [Validators.required]),
  //   sex: new FormControl('-1', [Validators.required]),
  //   contact: new FormControl('', [Validators.required]),
  //   address: new FormControl('', [Validators.required])
  // }
  // typesOfLaser:

  laser_type = ["HOL", "TFL"];
  ureter_group = ["Accommodable", "Difficult Access Sheath placement", "Narrow & Tight"];
  spec_group = ["Bilateral", "Single side"];
  yes_no_group = ["Yes", "No"];
  settings_array = ["Frequency", "Energy"];
  vitals_array = ["Pulse rate", "BP", "SpO2"];




  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      laser_type: ['', Validators.required],
      sheath_size: ['', Validators.required],
      ureter_group: ['', Validators.required],
      spec_group: ['', Validators.required],
      infection_sign_group: ['', Validators.required],
      residual_stone_group: ['', Validators.required],
      media_group: ['', Validators.required],
      settings_array: this.fb.array(this.settings_array.map(r => false)),
      vitals_array: this.fb.array(this.vitals_array.map(x => false)),
      test_array: [[], Validators.required]
    });
  }

  

  ngOnInit(): void {

    // let controls: any[] = [];

    // this.intraOperativeMetrics.forEach((r: Types) => {
    //   if(r.type === InputTypes.TextBox)
    //   this.formGroup.addControl(this.getObj(r), [])
    // });

    // controls.forEach(element => {
    //   this.fb.ge
    // });

    // this. = this.fb.group(
    //   this.intraOperativeMetrics.reduce((acc: any, config) => {
    //     if (config.type === InputTypes.Checkbox) {
    //       acc[config.controlName] = this.fb.array(config?.options!.map(() => false));
    //     } else {
    //       acc[config.controlName] = [config.controlName || ''];
    //     }
    //     return acc;
    //   }, {})
    // );
  }

  formResult(e: FormGroup) {
    console.log(e)
    // if(e.controls.includes('laser_type'))
    // this.formGroup.setControl('laser_type', e.controls['laser_type'])
    // console.log(this.formGroup)
  }

  onConditionSelection(e: any, name: string) {
    // this.formGroup = this.fb.array([]);
    // this.formGroup.setControl(name, e.target.id)

    // this.formGroup.controls[name].value.
    // this.formGroup.controls[name].setValue(e.target.id);
    console.log(e, name);

    let r = this.intraOperativeMetrics.find(r => r.controlName === e.target.name)

    this.formGroup.value[e.target.name] = name;
    // this.formGroup.setValue()
  }

  clicked(e?: any) {
    console.log(this.formGroup.value)
  }

  onSubmit() {
    console.log(this.formGroup)
  }

  getObj(obj: Types) {
    let o: any = {};
    o.controlName = obj.controlName;
    return JSON.parse(JSON.stringify(o));
  }

}
