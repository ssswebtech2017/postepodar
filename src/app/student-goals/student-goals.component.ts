import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-goals',
  templateUrl: './student-goals.component.html',
  styleUrls: ['./student-goals.component.scss']
})
export class StudentGoalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
