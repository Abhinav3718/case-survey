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

  formGroup: FormGroup = new FormGroup({
    size: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    density: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.data.forEach((r: string) => {
      this.selectedDiagnosis.push({
        diagnosis: r,
        checked: false
      })
    });
  }

  onConditionSelection(e: any, condition: any) {
    this.isDiagnosisSelected = true;

    let index = this.selectedDiagnosis.findIndex((r: any) => r.diagnosis === condition);

    if (index != -1) {
      this.selectedDiagnosis[index].checked = e.target.checked;
    }

    this.isDiagnosisSelected = this.selectedDiagnosis.findIndex((r: any) => r.checked as boolean === true) != -1;

    this.isXRaySelected = this.selectedDiagnosis.find((r: any) => r.diagnosis === 'X-ray KUB/IVP').checked as boolean;


  }
}
