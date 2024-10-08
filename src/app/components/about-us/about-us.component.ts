import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent { }
