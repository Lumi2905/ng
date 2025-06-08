import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-paciente-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule],
  templateUrl: './paciente-list.component.html'
})

export class PacienteListComponent {
  pacientes = [
    { id: 1, nombre: 'Juan Pérez', edad: 35, sexo: 'Masculino' },
    { id: 2, nombre: 'Ana Torres', edad: 29, sexo: 'Femenino' }
];

eliminar(id: number) {
    this.pacientes = this.pacientes.filter(p => p.id !== id);
  }
}