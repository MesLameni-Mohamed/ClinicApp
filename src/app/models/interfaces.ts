// src/app/models/interfaces.ts

export interface Appointment {
  date: string;
  time: string;
  treatmentType: string;
  status: string; // E.g., 'Completed', 'Cancelled', etc.
}

export interface Patient {
  id: string;
  name: string;
  email: string;
}

export interface PatientAppointment {
  patient: Patient;
  appointment: Appointment;
}

export interface MedicalRecord {
  date: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface Statistics {
  todayVisits: number;
  monthlyVisits: number;
}
