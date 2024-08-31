import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

import { CarriageCardComponent } from '../../components/carriage-card/carriage-card.component';
import { CarriageFacade } from '../../state/carriage.facade';
import { Carriage } from '../../state/carriage.model';

@Component({
  selector: 'app-carriage-admin-page',
  standalone: true,
  imports: [
    CommonModule,
    CarriageCardComponent,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './carriage-admin-page.component.html',
  styleUrl: './carriage-admin-page.component.scss',
})
export class CarriageAdminPageComponent {
  carriages$ = this.carriageFacade.carriages$;
  isLoading$ = this.carriageFacade.isLoading$;
  isFormVisible = false;
  carriageForm: FormGroup;
  selectedCarriage: Carriage | null = null;

  constructor(
    private carriageFacade: CarriageFacade,
    private fb: FormBuilder,
  ) {
    this.carriageFacade.loadCarriages();

    this.carriageForm = this.fb.group({
      name: ['', Validators.required],
      rows: [0, [Validators.required, Validators.min(1)]],
      leftSeats: [0, [Validators.required, Validators.min(1)]],
      rightSeats: [0, [Validators.required, Validators.min(1)]],
    });
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    if (!this.isFormVisible) {
      this.onCancel();
    }
  }

  onSave() {
    if (this.carriageForm.valid) {
      if (this.selectedCarriage) {
        const updatedCarriage: Carriage = {
          ...this.selectedCarriage,
          ...this.carriageForm.value,
        };
        this.carriageFacade.updateCarriage(updatedCarriage);
      } else {
        const newCarriage = this.carriageForm.value;
        this.carriageFacade.createCarriage(newCarriage);
      }
      console.log('Submitted Carriage:', this.carriageForm.value);
      this.onCancel();
    }
  }

  onCancel() {
    this.carriageForm.reset({
      name: '',
      rows: 0,
      leftSeats: 0,
      rightSeats: 0,
    });
    this.isFormVisible = false;
    this.selectedCarriage = null;
  }

  onEditCarriage(carriage: Carriage, isEditing: boolean) {
    if (isEditing) {
      this.selectedCarriage = carriage;
      this.carriageForm.patchValue(carriage);
      this.isFormVisible = true;
    }
  }

  onDeleteCarriage(carriage: Carriage) {
    this.carriageFacade.deleteCarriage(carriage.code);
  }
}
