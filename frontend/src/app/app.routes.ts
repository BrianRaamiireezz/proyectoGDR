import { Routes } from '@angular/router';
import { SeguridadComponent } from './components/seguridad/seguridad.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {path:'',component:HeaderComponent},
    { path: 'seguridad', component: SeguridadComponent }
];


