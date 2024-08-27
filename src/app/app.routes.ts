import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { AppointmentReservationComponent } from './components/patient-dashboard/appointment-reservation/appointment-reservation.component';
import { AppointmentsHistoryComponent } from './components/patient-dashboard/appointments-history/appointments-history.component';
import { PersonalDataComponent } from './components/patient-dashboard/personal-data/personal-data.component';
import { LogoutComponent } from './components/patient-dashboard/logout/logout.component';

export const routes: Routes = [
  {
    path: 'patient-dashboard',
    component: PatientDashboardComponent,
    children: [
      { path: '', redirectTo: 'appointment-reservation', pathMatch: 'full' },
      { path: 'appointment-reservation', component: AppointmentReservationComponent },
      { path: 'appointments-history', component: AppointmentsHistoryComponent },
      { path: 'personal-data', component: PersonalDataComponent },
      { path: 'logout', component: LogoutComponent },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
