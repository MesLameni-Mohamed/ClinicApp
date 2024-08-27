import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'; // Import the NavbarComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent], // Include NavbarComponent in imports
  template: `
    <router-outlet></router-outlet> <!-- Displays routed components -->
  `
})
export class AppComponent { }
