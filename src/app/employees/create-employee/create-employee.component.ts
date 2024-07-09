import { NgForm } from '@angular/forms';
import { EmployeeService } from './../../service/employee.service';
import { Employee } from 'src/app/models/employee.model';
import { Department } from './../../models/department.model';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  employee: Employee;
  previewPhoto = false;
  panelTitle;
  departments: Department[] = [
    { id: 1, typeDepartment: 'Software Engineer' },
    { id: 2, typeDepartment: 'IT' },
    { id: 3, typeDepartment: 'HR' },
    { id: 4, typeDepartment: 'Payroll' },
    { id: 5, typeDepartment: 'Admin' },
  ];

  constructor(
    private employeeService: EmployeeService,
    private _route: Router,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((paramesMap) => {
      const id = +paramesMap.get('id');
      this.getEmployee(id);
    });
  }
  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: '',
        dateOfBirth: null,
        department: 'select',
        photoPath: null,
        isActive: null,
      };
      this.panelTitle = 'Create Employee';
      this.createEmployeeForm.reset({});
    } else {
      this.panelTitle = 'Edit Employee';
      this.employeeService.getEmployeesId(id).subscribe((employee) => {
        this.employee = employee;
      });
    }
  }
  togglePreviewPhoto() {
    this.previewPhoto = !this.previewPhoto;
  }

  saveEmployee(): void {
    if (this.employee.id == null) {
      this.employeeService.addEmplouee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          this._route.navigate(['list']);
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      this.employeeService.updateEmployee(this.employee).subscribe(() => {
        this.createEmployeeForm.reset({});
        this._route.navigate(['list']);
      });
    }
  }
}
