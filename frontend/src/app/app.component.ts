import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'gdr-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SeguridadComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
