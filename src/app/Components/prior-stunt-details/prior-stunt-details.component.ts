import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RadioSelectionValues } from '../../Shared/Models/SurveyDetails';

@Component({
  selector: 'app-prior-stunt-details',
  templateUrl: './prior-stunt-details.component.html',
  styleUrl: './prior-stunt-details.component.css'
})
export class PriorStuntDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder) {}
  title: string = 'Prior stunt details';
  radioSelectionValues = RadioSelectionValues;

  form = this.fb.group({
    prior_stunt: ['', [Validators.required]],
    duration: ['', [Validators.required]],
    size: ['', Validators.required]
  });

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.form.value.prior_stunt === this.radioSelectionValues.No) {
      let values= this.form.value as any;
      values.duration = '';
      values.size = '';
      this.form.setValue(values);
    }
    console.log(this.form.value)
  }
}
