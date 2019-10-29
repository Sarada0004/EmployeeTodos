import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { EmployeeService } from './employee.service';
import { 
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
@NgModule({
  declarations: [EmployeeListComponent, EmployeeEditComponent, EmployeeDeleteComponent, EmployeeDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports : [EmployeeListComponent, EmployeeEditComponent,EmployeeDeleteComponent],
  providers : [EmployeeService]
})
export class EmployeeModule { }
