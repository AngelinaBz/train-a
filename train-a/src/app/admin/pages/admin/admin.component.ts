import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, RouterLink, MatTabsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  activeTabIndex = 0;
  private routes = ['stations', 'carriages', 'routes'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.firstChild?.url.subscribe((tabUrl) => {
      const path = tabUrl.map((tab) => tab.path).join('/');
      this.activeTabIndex = this.routes.indexOf(path);
    });
  }

  onTabChange(event: MatTabChangeEvent) {
    this.router.navigate([`/admin/${this.routes[event.index]}`]);
  }
}
