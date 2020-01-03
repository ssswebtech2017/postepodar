import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-between-us-portal',
  templateUrl: './between-us-portal.component.html',
  styleUrls: ['./between-us-portal.component.scss']
})
export class BetweenUsPortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
