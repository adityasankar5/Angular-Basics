import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lib-assignment',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Project Initialized');

  }

}
