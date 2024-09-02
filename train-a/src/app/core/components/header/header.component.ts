import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { UserFacade } from '../../../user/state/user.facade';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  isAdmin = false;
  userName: string | null = null;

  constructor(
    private router: Router,
    public userFacade: UserFacade,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.userFacade.user$.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.isAdmin = user.role === 'manager';
        this.userName = user.name;
      } else {
        this.isAuthenticated = false;
        this.isAdmin = false;
        this.userName = null;
      }

      this.cdr.detectChanges();
    });

    this.userFacade.getUserProfile();
  }
}
