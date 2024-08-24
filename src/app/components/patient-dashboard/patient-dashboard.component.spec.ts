// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { PatientDashboardComponent } from './patient-dashboard.component';

// src/app/components/patient-dashboard/patient-dashboard.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule // Add RouterModule to imports
  ]
})
export class PatientDashboardComponent {}
