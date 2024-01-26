import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrl: './diagnosis.component.css'
})
export class DiagnosisComponent implements OnInit {
  title = 'Diagnosis';

  data = ["CT KUB/IVP", "X-ray KUB/IVP"];

  isDiagnosisSelected: boolean = false;
  isXRaySelected: boolean = false;

  selectedDiagnosis: any[] = [];

  stone_density?: string;

  formGroup: FormGroup = new FormGroup({
    size: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    density: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.data.forEach((r: string) => {
      this.selectedDiagnosis.push({
        diagnosis: r,
        value: false
      })
    });
    this.selectedDiagnosis.push({
      diagnosis: 'stone_density',
      value: ''
    })
    this.selectedDiagnosis.push({
      diagnosis: 'params',
      value: null
    })

    // let controls = Object.keys(this.formGroup.controls);
    // controls.forEach((r: string) => {
    //   this.selectedDiagnosis.push({
    //     diagnosis: r,
    //     value: ''
    //   })
    // })
  }

  onConditionSelection(e: any, condition: any) {
    this.isDiagnosisSelected = true;

    let index = this.selectedDiagnosis.findIndex((r: any) => r.diagnosis === condition);

    if (index != -1) {
      this.selectedDiagnosis[index].value = e.target.checked;
    }

    this.isDiagnosisSelected = this.selectedDiagnosis.findIndex((r: any) => r.value as boolean === true) != -1;

    this.isXRaySelected = this.selectedDiagnosis.find((r: any) => r.diagnosis === 'X-ray KUB/IVP').value as boolean;


  }

  onStoneDensityEntered(e: any) {
    let index = this.selectedDiagnosis.findIndex((r: any) => r.diagnosis === 'stone_density');

    if (index != -1) {
      this.selectedDiagnosis[index].value = e.target.value;
    }
  }

  onNext() {
    let index = this.selectedDiagnosis.findIndex((r: any) => r.diagnosis === 'params');

    if (this.isDiagnosisSelected || this.isXRaySelected) {
      this.selectedDiagnosis[index].value = this.formGroup.value;
    } else {
      this.selectedDiagnosis.splice(index, 1);
    }


    this.selectedDiagnosis = this.selectedDiagnosis.filter((r: any) => r.value !== false);
    // console.log(this.selectedDiagnosis)

  }
}
