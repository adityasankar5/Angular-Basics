import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormService } from '../form/form.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'lib-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {


  constructor(private router:Router, public snackRef:MatSnackBar ,public dialogRef: MatDialogRef<DialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formService:FormService) { }

  ngOnInit(): void {
  



  }

  onYes()
  {
    this.router.navigate(['assignment/table'])
    
    this.dialogRef.close()
    this.formService.formData.push(this.data.itemData)
    this.snackRef.open('Form Submitted Successfully','',{duration:2000})
  }

  onNo(){
   this.dialogRef.close()
  }
  
 

}
