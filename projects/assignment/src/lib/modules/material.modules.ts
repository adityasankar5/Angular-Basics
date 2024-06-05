import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule, MatDialogModule, MatTableModule, MatSnackBarModule],
    exports: [MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCardModule, MatDialogModule, MatTableModule, MatSelectModule]
})
export class MaterialModule {

}