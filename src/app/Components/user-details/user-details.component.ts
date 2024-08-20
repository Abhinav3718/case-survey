import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../Shared/Services/data-populate.service';
import { Gender } from '../../Shared/Models/Gender';
import { UserDetails } from '../../Shared/Models/SurveyDetails';
import { RegexEnum } from '../../Shared/Models/RegexEnum';

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
    age: new FormControl('', [Validators.required, Validators.max(99), Validators.min(1)]),
    sex: new FormControl('-1', [Validators.required]),
    contact: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(RegexEnum.numbersOnly)]),
    address: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.genders = this.dataService.GetGenders();

  }

  onInputContactNumber(input: any) {
    let inputValue = input.target.value;
    let regex: RegExp = new RegExp(RegexEnum.numbersOnly);
    if(!regex.test(inputValue)) {
      let value = inputValue.match(/(\d+)/)
      let final = value && value.length > 0 ? value[0] : "";
      this.formGroup.controls["contact"].setValue(final);
    }
  }

  onSubmit() {
    if (this.formGroup.valid) {
      // let userDetails = this.formGroup.value as UserDetails;
      // console.log(userDetails)
      // this.userDetailsEntered?.emit(this.formGroup);

      this.dataService.setUserDetails(this.formGroup.value as UserDetails);
      this.onUserDetailsEntered.emit(true);
    } else {
      this.onUserDetailsEntered.emit(false);
    }
  }
}
