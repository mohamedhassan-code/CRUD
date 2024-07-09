import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { map, Observable } from 'rxjs';

@Injectable()
export class EmployeeDetailsGuardService {
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//     type NewType =()=> number;

//   return this._employeeService.getEmployees<NewType>(+route.paramMap.get('id'))
//       .pipe(
//           map(employee => {
//               const employeeExists = !!employee;

//               if (employeeExists) {
//                   return true;
//               } else {
//                   this._router.navigate(['notfound']);
//                   return false;
//               }
//           }),

//       );
// }
}
