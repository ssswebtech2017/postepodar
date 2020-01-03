import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chairmans-desk',
  templateUrl: './chairmans-desk.component.html',
  styleUrls: ['./chairmans-desk.component.scss']
})
export class ChairmansDeskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
