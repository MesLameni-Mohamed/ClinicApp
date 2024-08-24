import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { Appointment } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://your-backend-url/api/appointments'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Method to reserve an appointment
  reserveAppointment(appointment: Appointment): Observable<Appointment> {
    // Mock implementation for now, replace with an actual HTTP request to your backend
    console.log('Reserving appointment:', appointment);
    return of(appointment); // Returns the mock appointment data as an observable
  }

  // Fetch past appointments from the server
  getPastAppointments(): Observable<Appointment[]> {
    // Replace this with an actual HTTP request
    // return this.http.get<Appointment[]>(`${this.apiUrl}/past`);

    // Mock data for testing purposes
    const mockAppointments: Appointment[] = [
      { date: '2024-08-01', time: '10:00 AM', treatmentType: 'Cleaning', status: 'Completed' },
      { date: '2024-08-10', time: '2:00 PM', treatmentType: 'Filling', status: 'Completed' },
      { date: '2024-08-15', time: '11:00 AM', treatmentType: 'Checkup', status: 'Cancelled' },
      // Add more mock data as needed
    ];
    return of(mockAppointments);
  }
}
