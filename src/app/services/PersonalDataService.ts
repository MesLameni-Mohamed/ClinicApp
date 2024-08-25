import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PersonalInfo } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataService {
  private apiUrl = 'http://your-backend-url/api/personal-info'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Fetch personal info
  getPersonalInfo(): Observable<PersonalInfo> {
    // Replace this with an actual HTTP request
    // return this.http.get<PersonalInfo>(this.apiUrl);

    // Mock data for testing purposes
    const mockPersonalInfo: PersonalInfo = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Springfield'
    };
    return of(mockPersonalInfo);
  }

  // Update personal info
  updatePersonalInfo(personalInfo: PersonalInfo): Observable<PersonalInfo> {
    // Replace this with an actual HTTP request
    // return this.http.put<PersonalInfo>(this.apiUrl, personalInfo);

    // Mock response for testing purposes
    return of(personalInfo);
  }
}
