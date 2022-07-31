import { Component } from '@angular/core';
import { IMessage } from './types/IMessage';
import { IUser } from './types/IUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: IMessage | null = {
    title: 'Success',
    text: 'Published'
  }

  closePopup() {
    this.message = null
  }
}
