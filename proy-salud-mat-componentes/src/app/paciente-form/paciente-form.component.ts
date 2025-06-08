import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-paciente-form',
    imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
],
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css'] // corregido: era "styleUrl"
})

export class PacienteFormComponent implements OnInit {
    pacienteForm: any;
    pacientes: any[] = [];
    constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.pacienteForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    edad: [null, [Validators.required, Validators.min(18), Validators.max(99)]],
    sexo: ['', Validators.required]});
}

agregarPaciente() {
  if (this.pacienteForm.valid) {
      const nuevo = {
      id: this.pacientes.length + 1,
      ...this.pacienteForm.value
      };
      this.pacientes.push(nuevo);
      this.pacienteForm.reset();
      alert('Paciente agregado con éxito.');
  }
  }
}