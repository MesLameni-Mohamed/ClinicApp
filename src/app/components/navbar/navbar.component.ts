import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule and HttpClient
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

declare var bootstrap: any;
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule], // Include FormsModule and HttpClientModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService] // Include MessageService in providers
})
export class NavbarComponent {
  @ViewChild('loginModal') loginModal!: ElementRef;
  registerData = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: 'female',
    contactNumber: '',
    address: '',
    email: '',
    password: ''
  }
  loginData = {
    email: '',
    password: ''
  };

  
 constructor(private http: HttpClient, private router: Router) {}

 
  onRegisterSubmit() {
    const apiUrl = 'http://localhost:3000/patients'; // Your NestJS API endpoint
    this.http.post(apiUrl, this.registerData).subscribe({
      next: (response) => {
        console.log('Registration successful', response)
        // Handle success, possibly close the modal and redirect
      },
      error: (error) => {
        console.error('Registration error', error);
        // Handle error, possibly show an error message
      }
    });
  }

    onLogin() {
    this.http.post('http://localhost:3000/auth/login', this.loginData).subscribe(
      response => {
        console.log('Login successful', response);
         // Close the modal programmatically
        const modalElement = this.loginModal.nativeElement;
        const bootstrapModal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
        bootstrapModal.hide();
        // Navigate to the patient dashboard
        this.router.navigate(['/patient-dashboard']);
      },
      error => {
        console.error('Login failed', error);
        // Handle error (e.g., display an error message)
        // handle the wrong credentials error
          alert('Invalid email or password');
        
      }
    );
  }
}
