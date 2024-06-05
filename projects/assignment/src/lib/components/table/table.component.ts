import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form/form.service';

@Component({
  selector: 'lib-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  constructor(private router: Router, public formServices:FormService) { }

  displayedColumns: string[] = ['name', 'country', 'text'];
  ngOnInit(): void {
    
  }

  onClick() {
    this.router.navigate(['assignment/form'])

  }

}
