import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{

  constructor() { }

  public empData: Array<any>;

  private employeesData = new BehaviorSubject(this.getEmployeeData());
  currentEmployeesData = this.employeesData.asObservable();


  public getScope(): Array<any> | boolean {
      return this.empData;
  }

  public setScope(data: any): void {
      this.empData = data;
  }

  getEmployeeData (){
    let employeeData = [
      {id: 1560608769632, name: 'Artificial Intelligence'},
      {id: 1560608796014, name: 'Machine Learning'},
      {id: 1560608787815, name: 'Robotic Process Automation'},
      {id: 1560608805101, name: 'Blockchain'}
    ];
    return employeeData;
  }

  changeEmployeeData(data) {
    this.employeesData.next(data)
  }

  
}
