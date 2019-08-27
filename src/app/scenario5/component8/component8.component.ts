import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component8',
  templateUrl: './component8.component.html',
  styleUrls: ['./component8.component.css']
})
export class Component8Component implements OnInit {

  count = 0;

     increment() {
        this.count++;
      }
    decrement() {
        this.count--;
    }

  @Output()
  public childEvent = new EventEmitter<String>();

  
  public name:string='';

  constructor() { }

  ngOnInit() {
  }

}
