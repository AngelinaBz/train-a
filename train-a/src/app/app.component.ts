import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { paths } from './shared/configs/paths';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'train-a';

  constructor(private apiService: ApiService) {}

  // метод и apiService добавила только для тестирования отображения заказов. Необходимо удалить
  makeOrder() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      const order = {
        rideId: 2,
        seat: 11,
        stationStart: 54,
        stationEnd: 75,
      };
      this.apiService.createOrder(token, order).subscribe((orders) => {
        console.log(orders);
      });
    }
  }

  protected readonly paths = paths;
}
