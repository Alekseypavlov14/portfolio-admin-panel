import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  login: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private user: UserService,
    private api: ApiService
  ) {}

  ngOnInit(): void {}

  loginHandler() {
    this.api
      .request('/auth', {
        method: 'POST',
        body: JSON.stringify({
          login: this.login,
          password: this.password,
        }),
      })
      .then((data) => {
        if (data.message) throw new Error(data.message);
        return data;
      })
      .then((data) => {
        this.user.setUser({
          login: data.admin.login,
          password: this.password
        });
        this.router.navigate(['']);
      })
      .catch((error) => console.log(error));
  }
}
