import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component7',
  templateUrl: './component7.component.html',
  styleUrls: ['./component7.component.css']
})
export class Component7Component implements OnInit {

  title = 'Parent interacts with child via local variable';

  constructor() { }

  ngOnInit() {
  }

}
