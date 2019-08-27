import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component9',
  templateUrl: './component9.component.html',
  styleUrls: ['./component9.component.css']
})
export class Component9Component implements OnInit {

  public name: string ='';

  @Output()
  public childEvent = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }


  fireEvent(){
    this.childEvent.emit(this.name);
    console.log("wesrdtyguio"+this.name);
  }
}
