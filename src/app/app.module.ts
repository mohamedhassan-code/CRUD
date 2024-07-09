import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { SelectRequiredValidatorDirective } from './shared/select-validators';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator';
import { DisplayEmployeeComponent } from './employees/display-employee/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EmployeeFilterPipe } from './shared/employee.filter.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsGuardService } from './service/employee-details-guard.service';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    PageNotFoundComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
