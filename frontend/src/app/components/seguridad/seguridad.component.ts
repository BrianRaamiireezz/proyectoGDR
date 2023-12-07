import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'gdr-seguridad',
  standalone: true,
  imports: [],
  templateUrl: './seguridad.component.html',
  styleUrl: './seguridad.component.css'
})

export class SeguridadComponent implements OnInit  {
//Variables del router  
nombre_dipostivo1 = 'Router1';
ip_dispositivo1 = '192.168.1.5';
marcara_dispositivo1 = '255.255.255.0';
acceso1 = 'Permitido';
//Variables del equipo
nombre_dipostivo2 = 'PC 1';
ip_dispositivo2 = '192.168.1.51';
marcara_dispositivo2 = '255.255.255.0';
acceso2 = 'Denegado';
//Variables de bloquear boton
bloquear: boolean = false;
bloquear2: boolean = false;
bloquear3: boolean = false;
bloquear4: boolean = false;

ngOnInit(): void {
 if(this.acceso1=='Permitido'){
  this.bloquear2=true;
 }else{
  this.bloquear=true;
 }

 if(this.acceso2=='Permitido'){
  this.bloquear4=true;
 }else{
  this.bloquear3=true;
 }

}

permitirAcceso() {
  this.bloquear2 = true;
  this.bloquear = false;
  this.acceso1 = 'Permitido';
}

DenegarAcceso() {
  this.bloquear = true;
  this.bloquear2 = false;
  this.acceso1 = 'Denegado';
}

permitirAcceso1() {
  this.bloquear4 = true;
  this.bloquear3 = false;
  this.acceso2 = 'Permitido';
}

DenegarAcceso1() {
  this.bloquear3 = true;
  this.bloquear4 = false;
  this.acceso2 = 'Denegado';
}

}
