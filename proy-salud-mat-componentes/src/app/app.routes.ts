import { Routes } from '@angular/router';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteListComponent } from './paciente-list/paciente-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'formulario', pathMatch: 'full' },
    { path: 'formulario', component: PacienteFormComponent },
    { path: 'lista', component: PacienteListComponent }
];
