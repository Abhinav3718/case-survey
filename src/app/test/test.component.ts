import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  myForm: FormGroup;
  radioOptions = [
    { id: '104', name: 'Computer' },
    { id: '105', name: 'Sports' },
    { id: '106', name: 'TV' }
  ];

  cities = ['Reading', 'Sports', 'Cooking']

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required], // Textbox control
      productMethod: ['104'], // Radio button control
      country: ['', Validators.required], // Select dropdown control
      checkboxes: [[]], // Multi-checkbox control
      cities   : this.formBuilder.array(this.cities.map(x => !1)),
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Process form data (e.g., send to server)
      console.log('Form data:', this.myForm.value);
    } else {
      // Display validation errors
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
