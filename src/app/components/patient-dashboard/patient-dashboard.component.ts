import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Appointment, MedicalRecord, PersonalInfo } from '../../models/interfaces';
import { PatientService } from '../../services/patient.service';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule



@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],  // <-- Add FormsModule to imports array
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  appointments: Appointment[] = [];
  medicalRecords: MedicalRecord[] = [];
  personalInfo: PersonalInfo = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    const patientId = '123'; // Replace with the actual patient ID

    this.patientService.getAppointments(patientId).subscribe((data: Appointment[]) => {
      this.appointments = data;
    });

    this.patientService.getMedicalRecords(patientId).subscribe((data: MedicalRecord[]) => {
      this.medicalRecords = data;
    });

    this.patientService.updatePersonalInfo(patientId, this.personalInfo).subscribe((data: PersonalInfo) => {
      this.personalInfo = data;
    });
  }

  bookAppointment() {
    // Logic for booking an appointment
  }

  updateMedicalRecords() {
    // Logic for updating medical records
  }

  updatePersonalInfo() {
    this.patientService.updatePersonalInfo('123', this.personalInfo).subscribe(() => {
      alert('Personal information updated');
    });
  }
}
