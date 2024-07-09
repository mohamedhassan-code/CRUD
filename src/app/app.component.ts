import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-CRUD';
  showList=true
  constructor(private route:Router){
    this.route.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
this.showList=true
      }else if(routerEvent instanceof NavigationEnd||routerEvent instanceof NavigationCancel||routerEvent instanceof NavigationError){
        this.showList=false
      }
    })
  }
}
