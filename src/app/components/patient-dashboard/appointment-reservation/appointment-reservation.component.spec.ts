// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { AppointmentReservationComponent } from './appointment-reservation.component';



// src/app/components/patient-dashboard/appointment-reservation/appointment-reservation.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-appointment-reservation',
  templateUrl: './appointment-reservation.component.html',
  styleUrls: ['./appointment-reservation.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule // Add RouterModule to imports
  ]
})
export class AppointmentReservationComponent {}
