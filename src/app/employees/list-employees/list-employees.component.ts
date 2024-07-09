import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees:Employee[]
  filteredEmployee:Employee[]
 private _searchTerm:string;
 get searchTerm():string{
  return this._searchTerm
 }
 set searchTerm(value:string){
   this._searchTerm= value,
   this.filteredEmployee=this.filterEmployee(value)
 }

 filterEmployee(search:String){
  return this.employees.filter(employee =>
    employee.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
 }

  constructor(private router:Router,private _route:ActivatedRoute) {
    this.employees=this._route.snapshot.data['employeeList']
    if (this._route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    } else {
      this.filteredEmployee = this.employees;
    }
  }

  onDeleteNotification(id: number) {
    const i = this.filteredEmployee.findIndex(e => e.id === id);
    if (i !== -1) {
      this.filteredEmployee.splice(i, 1);
    }
  }
  ngOnInit(): void {

      }


}
