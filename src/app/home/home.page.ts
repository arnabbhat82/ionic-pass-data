import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user = {
    name: 'Simon Grimm',
    website: 'www.ionicacademy.com',
    address: {
      zip: 48149,
      city: 'Muenster',
      country: 'DE'
    },
    interests: [
      'Ionic', 'Angular', 'YouTube', 'Sports'
    ]
  };

  constructor(private router: Router) { }
  openDetailsWithQueryParams() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user)
      }
    };
    this.router.navigate(['details'], navigationExtras);
  }

}
