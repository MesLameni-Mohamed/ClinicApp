import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PersonalDataService } from '../../../services/PersonalDataService';
import { PersonalInfo } from '../../../models/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PersonalDataComponent implements OnInit {
  personalInfoForm: FormGroup;
  personalInfo: PersonalInfo | null = null;
  constructor(private fb: FormBuilder, private personalDataService: PersonalDataService) {
    this.personalInfoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.personalDataService.getPersonalInfo().subscribe((data: PersonalInfo) => {
      this.personalInfo = data;
      this.personalInfoForm.patchValue(this.personalInfo);
    });
  }

  onSubmit(): void {
    if (this.personalInfoForm.valid) {
      const updatedInfo: PersonalInfo = this.personalInfoForm.value;
      this.personalDataService.updatePersonalInfo(updatedInfo).subscribe({
        next: (response: PersonalInfo) => {
          console.log('Personal Info Updated:', response);
          alert('Your personal information has been updated.');
        },
        error: (err: any) => {
          console.error('Error updating personal information:', err);
          alert('Failed to update personal information. Please try again.');
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
