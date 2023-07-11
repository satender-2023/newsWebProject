import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentDateService {


  currentDate:any;
  constructor(private http: HttpClient) { }
  getCurrentDate() {
    this.currentDate = new Date().toDateString();
    return this.currentDate;
  }
}

