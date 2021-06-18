import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string = 'Ivan';
  count: number = 0;
  isVisible: boolean = false;
  car = {
    mark: 'Hyundai',
    model: 'Tucson'
  };

  allUsers = ['Petro', 'Oksana', 'Alina'];
  pageUrl = 'https://www.google.com';
  pageName = 'Google';
  message: string = '';
  login: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  printFullCar(): string {
    return `${this.car.mark} ${this.car.model}`
  }

  showMessage(event: MouseEvent): void {
    console.log('event', event);
    

    this.message = 'Hello Angular';
  }

  getLogin(): void {
    console.log(this.login);
    
  }

}
