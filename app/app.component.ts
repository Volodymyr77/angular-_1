import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { UserModel } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lesson1';
  users: UserModel[] = [];

  constructor() {}
}
