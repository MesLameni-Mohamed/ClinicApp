import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patient, Statistics,PatientAppointment } from '../../models/interfaces';
import { AdminService } from '../../services/admin.service';





@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  dailyPatientAppointments: PatientAppointment[] = [];
  totalPatients: number = 0;
  statistics: Statistics = { todayVisits: 0, monthlyVisits: 0 };
  allPatients: Patient[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getDailyPatientAppointments().subscribe((data: PatientAppointment[]) => {
      this.dailyPatientAppointments = data;
    });

    this.adminService.getTotalPatients().subscribe((data: number) => {
      this.totalPatients = data;
    });

    this.adminService.getStatistics().subscribe((data: Statistics) => {
      this.statistics = data;
    });

    this.adminService.getAllPatients().subscribe((data: Patient[]) => {
      this.allPatients = data;
    });
  }

  deletePatient(patientId: string) {
    if (confirm('Are you sure you want to delete this patient?')) {
      this.adminService.deletePatient(patientId).subscribe(() => {
        this.allPatients = this.allPatients.filter(p => p.id !== patientId);
        this.dailyPatientAppointments = this.dailyPatientAppointments.filter(p => p.patient.id !== patientId);
        alert('Patient deleted');
      });
    }
  }

  editAppointment(appointment: PatientAppointment) {
    // Logic to edit the appointment
    alert(`Edit appointment for ${appointment.patient.name} at ${appointment.appointment.time}`);
    // You can add a modal or form here to update the appointment
  }

  addAppointment() {
    // Logic to add a new appointment
    alert('Add a new appointment');
    // You can add a modal or form here to create a new appointment
  }

  editPatient(patient: Patient) {
    // Logic to edit the patient details
    alert(`Edit patient: ${patient.name}`);
    // You can add a modal or form here to update the patient information
  }

  addPatient() {
    // Logic to add a new patient
    alert('Add a new patient');
    // You can add a modal or form here to create a new patient
  }
}
