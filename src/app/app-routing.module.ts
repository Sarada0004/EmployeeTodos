import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './modules/employee/employee-list/employee-list.component';
import { EmployeeEditComponent} from './modules/employee/employee-edit/employee-edit.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { TodosComponent } from './modules/simpletodo/todos/todos.component';
import { RegistrationComponent } from './modules/registration/registration/registration.component';
import { CrudComponent } from './modules/material-table/crud/crud.component';

const routes: Routes = [
  {
    path : "",
    redirectTo: "employees",
    pathMatch: "full"
  },
  {
    path : "employees",
    component : EmployeeListComponent
  },
  {
    path : "employees/Edit",
    component : EmployeeEditComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "todo",
    component : TodosComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'crud',
    component: CrudComponent
  },
  {
    path : "**",
    component : EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
