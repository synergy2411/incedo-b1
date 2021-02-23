import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent implements OnInit {

  @Input() user : User;

  @Output() userEvent = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  moreInfo(user : User){
    // emit the custom event
    this.userEvent.emit(user);
  }

}
