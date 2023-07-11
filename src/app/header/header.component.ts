import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }
  menuVariable:boolean = false;
  menu_icon:boolean = false;
  toggleCollapsed(): void {
    this.menuVariable = !this.menuVariable;
    this.menu_icon = !this.menu_icon;
  }
 
  
}
