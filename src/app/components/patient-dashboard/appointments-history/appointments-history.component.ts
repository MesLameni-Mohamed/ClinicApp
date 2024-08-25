import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../../services/appointment-service.service';
import { Appointment } from '../../../models/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointments-history',
  templateUrl: './appointments-history.component.html',
  styleUrls: ['./appointments-history.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AppointmentsHistoryComponent implements OnInit {
  pastAppointments$: Observable<Appointment[]>;

  constructor(private appointmentService: AppointmentService) {
    this.pastAppointments$ = this.appointmentService.getAppointments();
  }

  ngOnInit(): void {}
}
