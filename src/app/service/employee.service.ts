import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, delay, Observable } from "rxjs";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api=('http://localhost:3000/employees')
constructor(private http:HttpClient){}


  getEmployees(): Observable<Employee[]> {
 return this.http.get<Employee[]>(this.api).pipe(delay(2000))
  }
  getEmployeesId(id: number):Observable<Employee> {
    return this.http.get<Employee>(`${this.api}/${id}`)
  }


  addEmplouee(employee: Employee):Observable<Employee> {
    if (employee.id === null) {
    return this.http.post<Employee>(this.api,  employee, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })
    }
  }
  updateEmployee(employee: Employee):Observable<void> {
    return this.http.put<void>(`${this.api}/${employee.id}`,  employee, {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  })

  }
  deleteEmployee(id: number) :Observable<void>{
    return this.http.delete<void>(`${this.api}/${id}`)
  }
}

