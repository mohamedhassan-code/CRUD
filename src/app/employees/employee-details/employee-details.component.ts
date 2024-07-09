import { Employee } from './../../models/employee.model';
import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee
  private id: number
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parmes => {
      this.id = +parmes.get('id')
     this.employeeService.getEmployeesId(this.id).subscribe((employee)=>{
      this.employee=employee
     })
    })}

  ViewNextEmployee() {
    if (this.id < 3) {
      this.id = this.id + 1
    } else {
      this.id = 1
    }
    this.router.navigate(['employee', this.id],{
      queryParamsHandling:'preserve'
    })
  }
}
