import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component12',
  templateUrl: './component12.component.html',
  styleUrls: ['./component12.component.css']
})
export class Component12Component implements OnInit {

   @Output()
   public childEvent = new EventEmitter<String>();

  public name:String='';

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.childEvent.emit(this.name);
    console.log('message is'+this.name);
  }
}
