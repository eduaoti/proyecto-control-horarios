import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as jwtDecode from 'jwt-decode';


@Component({
  selector: 'app-grafica-gantt',
  templateUrl: './grafica-gantt.component.html',
  styleUrl: './grafica-gantt.component.css'
})
export class GraficaGanttComponent  implements OnInit{
  
  constructor(
    private cookieService: CookieService,
    
  ){}
  
  
  
  ngOnInit(): void {

  }

  
  
  
}
