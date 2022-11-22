import { Component } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-front';
  showMenu: boolean = true;
  username = '';

  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.jwtUserToken.subscribe(token => {
      if (token) {
        const decoded: any = jwtDecode(token);
        this.username = decoded.username;
      }

      if (this.username) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    });
  }

  logout() {
    this.username = '';
    this.username = this.apiService.logout();
  }
}
