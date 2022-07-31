import { IUser } from './../../types/IUser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: IUser | null = null

  constructor() {}

  setUser(user: IUser) {
    this.user = user
  }

  getUser() {
    return this.user
  }
}
