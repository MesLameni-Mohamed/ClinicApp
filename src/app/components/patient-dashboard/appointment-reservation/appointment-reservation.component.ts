import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../../../services/appointment-service.service';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common'
import { Appointment } from '../../../models/interfaces';

@Component({
  selector: 'app-appointment-reservation',
  templateUrl: './appointment-reservation.component.html',
  styleUrls: ['./appointment-reservation.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,CommonModule
  ]
})
export class AppointmentReservationComponent implements OnInit {
  appointmentForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private appointmentService: AppointmentService,
    private router: Router
  ) {
    this.appointmentForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      treatmentType: ['', Validators.required],
      status: ['pending'] // Default status when creating an appointment
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const appointment: Appointment = this.appointmentForm.value;
      this.appointmentService.createAppointment(appointment).subscribe({
        next: (response: Appointment) => {
          console.log('Appointment Reserved:', response);
          alert('Appointment successfully reserved!');
          this.router.navigate(['/appointments-history']); // Navigate to appointments history or other page after reservation
        },
        error: (err: any) => {
          console.error('Error reserving appointment:', err);
          alert('Failed to reserve appointment. Please try again.');
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
