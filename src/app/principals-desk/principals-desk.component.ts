import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principals-desk',
  templateUrl: './principals-desk.component.html',
  styleUrls: ['./principals-desk.component.scss']
})
export class PrincipalsDeskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
