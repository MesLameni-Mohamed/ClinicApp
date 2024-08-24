import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppointmentService } from '../../../services/appointment-service.service';


@Component({
  selector: 'app-appointment-reservation',
  templateUrl: './appointment-reservation.component.html',
  styleUrls: ['./appointment-reservation.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // Ensure ReactiveFormsModule is imported here
    RouterModule
  ]
})
export class AppointmentReservationComponent implements OnInit {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService) {
    this.appointmentForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      treatmentType: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      const appointment = this.appointmentForm.value;
      this.appointmentService.reserveAppointment(appointment).subscribe({
        next: (response) => {
          console.log('Appointment Reserved:', response);
          alert('Appointment successfully reserved!');
        },
        error: (err) => {
          console.error('Error reserving appointment:', err);
          alert('Failed to reserve appointment. Please try again.');
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
