import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { AuthFacade } from '../../../auth/state/auth.facade';
import { paths } from '../../../shared/configs/paths';
import { ChangePasswordDialogComponent } from '../../components/change-password-dialog/change-password-dialog.component';
import { roles } from '../../models/Roles.model';
import { UserFacade } from '../../state/user.facade';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    NgIf,
    JsonPipe,
    MatIcon,
    MatLabel,
    MatFormField,
    MatInput,
    MatIconButton,
    MatButton,
    MatToolbar,
    MatSuffix,
    MatError,
    MatProgressSpinner,
    ReactiveFormsModule,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent implements OnInit {
  isLoading = toSignal(this.userFacade.isLoading$);
  errors = toSignal(this.userFacade.errors$);
  user = toSignal(this.userFacade.user$);

  isEditingName = false;
  isEditingEmail = false;

  nameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private userFacade: UserFacade,
    private authFacade: AuthFacade,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.userFacade.user$.subscribe((user) => {
      if (user) {
        this.nameControl.setValue(user.name);
        this.emailControl.setValue(user.email);
      }
    });
  }

  ngOnInit(): void {
    this.userFacade.getUserProfile();
  }

  editName() {
    this.isEditingName = true;
  }

  saveName() {
    const newName = this.nameControl.value as string;

    if (this.nameControl.valid) {
      if (!(newName === this.user()?.name)) {
        this.userFacade.updateUserProfile({ name: newName });
      }

      this.isEditingName = false;
    }
  }

  editEmail() {
    this.isEditingEmail = true;
  }

  saveEmail() {
    const newEmail = this.emailControl.value as string;

    if (this.emailControl.valid) {
      if (!(newEmail === this.user()?.email)) {
        this.userFacade.updateUserProfile({ email: newEmail });
      }
      this.isEditingEmail = false;
    }
  }

  logout() {
    this.authFacade.logout();
    this.router.navigate([paths.main]);
  }

  openPasswordChangeDialog(): void {
    this.dialog.open(ChangePasswordDialogComponent);
  }

  protected readonly roles = roles;
}
