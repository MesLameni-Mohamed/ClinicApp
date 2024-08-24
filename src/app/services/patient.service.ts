// src/app/services/patient.service.ts

import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Appointment, MedicalRecord, PersonalInfo } from '../models/interfaces';



@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  getAppointments(patientId: string): Observable<Appointment[]> {
    // Mock data
    const mockAppointments: Appointment[] = [
      { date: '2024-08-24', time: '10:00 AM', treatmentType: 'Tooth remova(extraction)' , status:'cancelled'},
      { date: '2024-08-25', time: '11:00 AM', treatmentType: 'whitening', status:'completed' }
    ];
    return of(mockAppointments);
  }

  getMedicalRecords(patientId: string): Observable<MedicalRecord[]> {
    // Mock data
    const mockMedicalRecords: MedicalRecord[] = [
      { date: '2024-07-20', description: 'Routine Checkup' },
      { date: '2024-06-15', description: 'Dental Cleaning' }
    ];
    return of(mockMedicalRecords);
  }

  updatePersonalInfo(patientId: string, personalInfo: PersonalInfo): Observable<PersonalInfo> {
    // Mock data - just return the updated info
    return of(personalInfo);
  }
}
