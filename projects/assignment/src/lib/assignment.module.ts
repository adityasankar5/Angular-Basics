import { NgModule } from '@angular/core';
import { AssignmentComponent } from './assignment.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './modules/material.modules';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
const routes: Routes = [
  {
    path: '', component: AssignmentComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'table', component: TableComponent },
      { path: 'form', component: FormComponent },
    ]
  },

];



@NgModule({
  declarations: [
    AssignmentComponent,
    DashboardComponent,
    FormComponent,
    TableComponent,
    DialogboxComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AssignmentComponent
  ]
})
export class AssignmentModule { }
