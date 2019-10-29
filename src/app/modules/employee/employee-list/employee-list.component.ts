import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { EmployeeData } from '../iemployee_data';
import { EmployeeService } from '../employee.service';
import { EmployeeDeleteComponent } from '../employee-delete/employee-delete.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { CommonconstantService } from 'src/app/shared/services/commonconstant.service';
import { ToastrService } from 'ngx-toastr';
 
 

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource : any;
  ELEMENT_DATA : EmployeeData[];
  modalRef;
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router : Router,private empService : EmployeeService, private modalService : NgbModal,
    private constantService : CommonconstantService, private toastr: ToastrService) {

   }
 

  ngOnInit() {
    console.log("employee list");
    this.empService.currentEmployeesData.subscribe(data => {
      this.ELEMENT_DATA = data
      this.dataSource =  new MatTableDataSource(this.ELEMENT_DATA);  
    });
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  editEmployee(data){
    this.empService.setScope(data);
    this.router.navigate(['/employees/Edit']);
  }

  deleteEmployee(data){
    this.empService.setScope(data);
    this.modalRef = this.modalService.open(EmployeeDeleteComponent,{backdrop: 'static',keyboard: false});
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  addEmployee(){
    if(this.constantService.USER_LOGGEDIN){
      this.modalRef = this.modalService.open(EmployeeDetailComponent,{backdrop: 'static',keyboard: false});
      this.modalRef.componentInstance.employeeDetails.subscribe((data) => {
       
        let idx = this.ELEMENT_DATA.findIndex(elem => {
          return elem.id === data.id
        });
        console.log(idx,"idx");
        

        if (idx == -1){
          this.ELEMENT_DATA.push(data);
          this.empService.changeEmployeeData(this.ELEMENT_DATA);
          console.log(this.ELEMENT_DATA,"element data");
          this.modalRef.close();
        }else{
          this.toastr.error("Employee already exists with this ID");
        }
      })
    }else{
      this.router.navigate(['/login'])
    }
  }

}
