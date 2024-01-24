import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../Shared/Services/data-populate.service';
import { Gender } from '../../Shared/Models/Gender';
import { UserDetails } from '../../Shared/Models/SurveyDetails';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  genders!: Gender[];

  // userDetailsEntered?: EventEmitter<FormGroup>;
  @Output() onUserDetailsEntered: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  
  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    sex: new FormControl('-1', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.genders = this.dataService.GetGenders();

  }

  onSubmit() {
    if (this.formGroup.valid) {
      // let userDetails = this.formGroup.value as UserDetails;
      // console.log(userDetails)
      // this.userDetailsEntered?.emit(this.formGroup);

      this.dataService.setUserDetails(this.formGroup.value as UserDetails);
      this.onUserDetailsEntered.emit(true);
    }
  }
}
