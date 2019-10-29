import { Component, OnInit, NgZone } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent implements OnInit {

  single_employeeData;
  employeesData;

  constructor(private activeModal : NgbActiveModal, private empService : EmployeeService, private ngZone: NgZone) { }

  ngOnInit() {
    this.single_employeeData = this.empService.getScope();
  }

  delete(){
   
    this.empService.currentEmployeesData.subscribe(data => this.employeesData = data);
    const index = this.employeesData.findIndex(data => data.id === this.single_employeeData.id);
    this.employeesData.splice(index, 1);
    this.empService.changeEmployeeData(this.employeesData);
    this.activeModal.close("success");

  }

  dismiss(){
    this.activeModal.close("success");
  }

}
