import { EmployeeDetailsGuardService } from './service/employee-details-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListResolverService } from './service/empolyee-list-reslover.service';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { CreateCanDeactivateGuardService } from './service/create-can-deactivate-guard.service';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:'list',
 component:ListEmployeesComponent,
  resolve:{employeeList:EmployeeListResolverService}
},
 {path:'edit/:id',
 component:CreateEmployeeComponent,
 canDeactivate:[CreateCanDeactivateGuardService]},
 {path:'employee/:id',component:EmployeeDetailsComponent},
 {path:'**',redirectTo:'list',pathMatch:'full'},
 {path:'notfound',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
