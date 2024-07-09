import { CreateEmployeeComponent } from './../employees/create-employee/create-employee.component';
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

@Injectable({
  providedIn:"root"
})
export class CreateCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>{
  canDeactivate(component: CreateEmployeeComponent): boolean{
if(component.createEmployeeForm.dirty){
  return confirm("Are you sure want to discard your chenges? ")
}
return true
  };

}
