import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() employeeData;
  @Output() private employeeDetails = new EventEmitter<number>();
  form;
  constructor(private activeModal : NgbActiveModal, private router : Router) { }

  ngOnInit() {
    console.log(this.employeeData);
    
    if(this.employeeData){
      this.form = new FormGroup({
        id: new FormControl({value:null,disabled:true}),
        name: new FormControl({value:''})
       });
      this.form.setValue({
        id: this.employeeData.id, 
        name: this.employeeData.name
      });
    }else{
      this.form = new FormGroup({
        id: new FormControl(null,this.validateNumber.bind(this)),
        name: new FormControl('')
       });
    }
    console.log(this.employeeData,"employeeData"); 
  }

  employeeDetailsAdd(){
    console.log(this.form.getRawValue(),"form value");
    this.employeeDetails.emit(this.form.getRawValue());
  }

  validateNumber(control: FormControl): { [s: string]: boolean } {

    //revised to reflect null as an acceptable value 
    if (control.value === null) return null;
  
    // check to see if the control value is no a number
    if (isNaN(control.value)) {
      return { 'NaN': true };
    }
  
    return null; 
  }

  Cancel(){
    console.log("inside cancel");
    this.activeModal.close('');
    this.router.navigate(['/']);
  }

  

}
