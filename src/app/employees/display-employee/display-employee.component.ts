import { EmployeeService } from './../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {
@Input() employee:Employee
  selectedEmployeeId: number;
  confirmDelete=false
  panelExpanded=true
@Input() searchTerm:string
@Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
getNameandGender(){
  return this.employee.name+''+this.employee.gender
 }
  constructor(private route:ActivatedRoute,private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.selectedEmployeeId=+this.route.snapshot.paramMap.get('id')
  }
  viewEmployee(){
    this.router.navigate([`employee`,this.employee.id],{
      queryParams:{'name':this.searchTerm}
    })
}
editEmployee(){
  this.router.navigate(['edit',this.employee.id])
}
deleteEmployee(){
  this.employeeService.deleteEmployee(this.employee.id).subscribe(
    ()=>console.log(`delete emplyee id:${this.employee.id}`)
  )
  this.notifyDelete.emit(this.employee.id);
}}
// Property Setter
// Property setter is specific to a given property, so we only get changes of that specific property
// Useful when you want to keep track of a single property
//   private _employeeId:number

// @Input()
// set emplyeeId(val:number){
//   console.log( 'employeeId change from'+JSON.stringify(this._employeeId)+'to'+JSON.stringify(val))
//   this._employeeId=val
// }
// get employeeId(){
//   return this._employeeId
