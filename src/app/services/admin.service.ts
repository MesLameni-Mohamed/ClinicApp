// src/app/services/admin.service.ts

import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Patient, Statistics,PatientAppointment } from '../models/interfaces';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getDailyPatientAppointments(): Observable<PatientAppointment[]> {
    // Mock data
    const mockPatientAppointments: PatientAppointment[] = [
      {
        patient: { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
        appointment: { date: '2024-08-24', time: '10:00 AM', doctor: 'Smith' }
      },
      {
        patient: { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
        appointment: { date: '2024-08-24', time: '11:00 AM', doctor: 'Johnson' }
      }
    ];
    return of(mockPatientAppointments);
  }

  getTotalPatients(): Observable<number> {
    // Mock data
    return of(150);
  }

  getStatistics(): Observable<Statistics> {
    // Mock data
    const mockStatistics: Statistics = {
      todayVisits: 25,
      monthlyVisits: 300
    };
    return of(mockStatistics);
  }

  getAllPatients(): Observable<Patient[]> {
    // Mock data
    const mockPatients: Patient[] = [
      { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
      { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' }
    ];
    return of(mockPatients);
  }

  deletePatient(patientId: string): Observable<void> {
    // Mock data - just return void
    return of(undefined);
  }
}
