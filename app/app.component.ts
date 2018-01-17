
import {Component} from '@angular/core';

@Component({
  selector:'bs-app',
  templateUrl: '../app/app.component.html'
})

export class AppComponent {
  pageTitle: string = "Dev Book Store"
  searchBox: string = "";
}