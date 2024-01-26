import { Component, OnInit } from '@angular/core';
import { INTRA_OPERATIVE_FINDINGS, Types } from '../../Shared/Models/SurveyDetails';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  

  ngOnInit(): void {
    this.intraOperativeMetrics.forEach((r: Types) => {
      this.formGroup.addControl(r.controlName, new FormControl(Validators.required));
    });
  }

}
