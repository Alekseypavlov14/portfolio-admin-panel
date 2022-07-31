import { IProject } from './../../types/IProject';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(
    private router: Router,
    private user: UserService,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    if (!this.user.getUser()) {
      this.router.navigate(['/login'])
    }
  }

  createProject(project: IProject) {
    this.api.request('/project', {
      body: JSON.stringify({
        project: project,
        ...this.user.getUser()
      }),
      method: 'POST'
    })
  }

}
