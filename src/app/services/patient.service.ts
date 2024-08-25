import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment, MedicalRecord, PersonalInfo } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  getAppointments(patientId: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/patients/${patientId}/appointments`);
  }

  getMedicalRecords(patientId: string): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(`${this.apiUrl}/patients/${patientId}/medical-records`);
  }

  updatePersonalInfo(patientId: string, personalInfo: PersonalInfo): Observable<PersonalInfo> {
    return this.http.put<PersonalInfo>(`${this.apiUrl}/patients/${patientId}`, personalInfo);
  }
}
