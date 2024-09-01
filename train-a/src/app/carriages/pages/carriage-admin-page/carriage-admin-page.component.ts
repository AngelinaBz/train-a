import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

import { uniqueNameValidator } from '../../../shared/validators/carriage-name.validator';
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
export class CarriageAdminPageComponent implements OnInit {
  carriages$ = this.carriageFacade.carriages$;
  isLoading$ = this.carriageFacade.isLoading$;
  deleteError$ = this.carriageFacade.deleteError$;
  carriageForm!: FormGroup;
  selectedCarriage: Carriage | null = null;
  isFormVisible = false;
  isEditing = false;

  constructor(
    private carriageFacade: CarriageFacade,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.carriageFacade.loadCarriages();

    this.carriageForm = this.fb.group({
      name: ['name', [Validators.required], [uniqueNameValidator(this.carriageFacade)]],
      rows: [1, [Validators.required, Validators.min(1)]],
      leftSeats: [1, [Validators.required, Validators.min(1)]],
      rightSeats: [1, [Validators.required, Validators.min(1)]],
    });
    this.updateValidators();
  }

  private updateValidators(): void {
    const nameControl = this.carriageForm.get('name');
    nameControl?.setValidators(this.isEditing ? null : [Validators.required]);
    nameControl?.setAsyncValidators(this.isEditing ? null : uniqueNameValidator(this.carriageFacade));
    nameControl?.updateValueAndValidity();
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    if (!this.isFormVisible) {
      this.onCancel();
    }
  }

  onSave(): void {
    if (this.carriageForm.valid) {
      const formValue = this.carriageForm.value;
      if (this.isEditing && this.selectedCarriage) {
        const updatedCarriage: Carriage = { ...this.selectedCarriage, ...formValue };
        this.carriageFacade.updateCarriage(updatedCarriage);
      } else {
        this.carriageFacade.createCarriage(formValue);
      }
      this.onCancel();
    }
  }

  onCancel() {
    this.carriageForm.reset({
      name: 'name',
      rows: 1,
      leftSeats: 1,
      rightSeats: 1,
    });
    this.isFormVisible = false;
    this.selectedCarriage = null;
    this.isEditing = false;
  }

  onUpdateCarriage(carriage: Carriage) {
    this.selectedCarriage = carriage;
    this.carriageForm.patchValue(JSON.parse(JSON.stringify(carriage)));
    this.isFormVisible = true;
    this.isEditing = true;
    this.updateValidators();
  }

  onDeleteCarriage(carriage: Carriage) {
    this.carriageFacade.deleteCarriage(carriage.code);
  }
}
