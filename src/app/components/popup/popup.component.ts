import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IMessage } from 'src/app/types/IMessage';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() message!: IMessage
  @Output() closeEvent = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeEvent.emit()
  }
}
