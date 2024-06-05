import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { FormService } from './form.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';




@Component({
  selector: 'lib-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  inputValue: any;
  inputGender: any;
  inputText: any;
  showoutput: any;
  showDialogBox: boolean = false;

  formInfo!: FormGroup;

  dropdown:any =[
    {name:'India', value:'INR'},
    {name:'USA', value:'USD'},
    {name:'UK', value:'GBP'},
    {name:'Australia', value:'AUD'}

  ]

  constructor(private router: Router, private formServices:FormService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.formInfo = new FormGroup({
      name: new FormControl(),
      country: new FormControl(),
      text: new FormControl()

    })
  }

  onClick() {
    this.router.navigate(['assignment/'])

  }

 
  onSubmit() {
    // console.log(this.formInfo?.value);
    //console.log(this.formServices.formData);
    this.showDialogBox = true;
    this.dialog.open(DialogboxComponent,{
      data: {
      title: 'Submit Form',
      itemData: this.formInfo?.value,
      allData: this.dropdown
    }
    });
    } //service
 
  
  
  
  
}




