import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component6',
  templateUrl: './component6.component.html',
  styleUrls: ['./component6.component.css']
})
export class Component6Component implements OnInit {
  public message ="";
  @Output() public childEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit(this.message);
  }
}
