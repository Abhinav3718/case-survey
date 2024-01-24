import { Component, OnInit } from '@angular/core';
import { DataService } from './Shared/Services/data-populate.service';
import { Surgery } from './Shared/Models/Surgery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  surgeries!: Surgery[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.surgeries = this.dataService.GetSurgeryTypes();
  }

  onSelectSurgeryType(e: any) {
    let selectedSurgeryType = e.target.value;

    if (selectedSurgeryType != -1) {
      this.dataService.setSelectedSurgery(e.target.value);
      let surgeryType = this.surgeries.find(
        (r) => r.id == e.target.value
      )?.name;

      this.dataService.navigate(surgeryType);
    }
    else {
      this.dataService.navigate(undefined);
    }
  }
}
