import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  single_employeeData;
  employeesData;

  constructor(private empService : EmployeeService, private router : Router) { }

  ngOnInit() {
    this.single_employeeData = this.empService.getScope();
  }

  changeEmployee(empData){

    this.empService.currentEmployeesData.subscribe(data => this.employeesData = data);
    console.log(empData,"emp data");
    
    for(let emp of this.employeesData){
      if(emp.id == empData.id){
        this.employeesData.splice(this.employeesData.indexOf(emp), 1);
        this.employeesData.push(empData);
      }
    }
    console.log(this.employeesData,"employee data");
    
    this.empService.changeEmployeeData(this.employeesData);
    console.log(this.employeesData,"employees data");
    
    this.router.navigate(['/employees'])
  }

}
