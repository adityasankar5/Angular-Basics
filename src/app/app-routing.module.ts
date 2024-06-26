import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'assignment', pathMatch: 'full' },
  {
    path: 'assignment',
    loadChildren: () => import('../app/modules/assignmentHome.module').then(m => m.AssignmentHomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
