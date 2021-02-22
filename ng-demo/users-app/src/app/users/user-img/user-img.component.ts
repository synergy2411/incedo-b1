import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent implements OnInit {

  @Input() user : any;

  @Output() userEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  moreInfo(user : any){
    // emit the custom event
    this.userEvent.emit(user);
  }

}
