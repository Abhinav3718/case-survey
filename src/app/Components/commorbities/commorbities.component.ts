import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Comorbidities, HEALTH_CONDITIONS, PRE_OPERATIVE_URINE, RadioSelectionValues } from '../../Shared/Models/SurveyDetails';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-commorbities',
  templateUrl: './commorbities.component.html',
  styleUrl: './commorbities.component.css'
})
export class CommorbitiesComponent implements OnInit {
  constructor(public fb: FormBuilder) {}
  title: string = 'Commorbities';
  healthConditions?: Comorbidities;

  checkedComorbidities: {}[] = [];

  form = this.fb.group({
    preoperative_urine_cs: ['', [Validators.required]],
    text_area: ['', [Validators.required]]
  });

  radioSelectionValues = RadioSelectionValues;

  @Output() onComorbitiesDetailsEntered: EventEmitter<{}[] | undefined> = new EventEmitter<{}[] | undefined>(undefined);

  ngOnInit(): void {
    this.healthConditions = {
      healthConditions: HEALTH_CONDITIONS,
      preOperativeUrine: PRE_OPERATIVE_URINE
    };
  }

  onConditionSelection(e: any, condition: any) {
    this.cleanCheckedComorbidities(condition, e.target.checked as boolean);
  }

  onCompletingCommorbitiesSelection() {
    if(this.form.valid || (this.form.value.preoperative_urine_cs == this.radioSelectionValues.No)) {
      let isChecked = (this.form.value.preoperative_urine_cs === this.radioSelectionValues.Yes) ? true : false;
      this.cleanCheckedComorbidities(PRE_OPERATIVE_URINE.name, isChecked, this.getDescription(this.form.value.text_area));
    }

    this.filterValidSelections();

    this.onComorbitiesDetailsEntered.emit(this.checkedComorbidities);
    // console.log(this.checkedComorbidities)
  }

  private cleanCheckedComorbidities(key: string, value: boolean, description?: string | null) {
    if(this.checkedComorbidities.length > 0) {
    let indexes = this.checkedComorbidities.findIndex((r: any) => r.comorbidity === key);

    if (indexes != -1) {
      (this.checkedComorbidities[indexes] as any).checked = value;
      (this.checkedComorbidities[indexes] as any).description = description;
    } else {
      this.pushSelectedComorbiditiesData(key, value, description);
    }
    }
    else {
      this.pushSelectedComorbiditiesData(key, value, description);
    }
  }

  private pushSelectedComorbiditiesData(key: string, value: boolean, description?: string | null) {
    this.checkedComorbidities.push({
      comorbidity: key,
      checked: value,
      description: description
    });
  }

  private filterValidSelections() {
    let obj: any = this.checkedComorbidities.filter((r: any) => r.comorbidity === PRE_OPERATIVE_URINE.name)[0];

    if(obj.checked === false) {
      obj.description = null;
    }

    this.checkedComorbidities = this.checkedComorbidities.filter((r: any) => (r.checked === true));
    this.checkedComorbidities.push(obj);

    this.checkedComorbidities = [...new Set(this.checkedComorbidities.map((item: any) => item))];
  }

  private getDescription(description: string | null | undefined) {
    return description ? description : null;
  }
}
