import { Component, OnInit } from '@angular/core';
import { Comorbidities, HEALTH_CONDITIONS } from '../../Shared/Models/SurveyDetails';

@Component({
  selector: 'app-commorbities',
  templateUrl: './commorbities.component.html',
  styleUrl: './commorbities.component.css'
})
export class CommorbitiesComponent implements OnInit {
  healthConditions?: Comorbidities;

  ngOnInit(): void {
    this.healthConditions = {
      healthConditions: HEALTH_CONDITIONS,
      preOperativeUrine: ''
    };
  }
}
