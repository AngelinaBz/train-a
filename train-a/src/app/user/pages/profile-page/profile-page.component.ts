import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserFacade } from '../../state/user.facade';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [FormsModule, AsyncPipe, NgIf, JsonPipe],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent implements OnInit {
  isLoading$ = this.userFacade.isLoading$;
  errors$ = this.userFacade.errors$;
  user$ = this.userFacade.user$;

  constructor(private userFacade: UserFacade) {}

  ngOnInit(): void {
    this.userFacade.getUserProfile();
  }

  updateUserProfile(name: string, email: string): void {
    this.userFacade.updateUserProfile({ name, email });
  }
}
