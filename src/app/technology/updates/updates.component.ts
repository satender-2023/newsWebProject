import { Component, OnInit } from '@angular/core';
import { CurrentDateService } from 'src/app/current-date.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  notificationMessage:any;
  currentDate: any;
  constructor(private dateService: CurrentDateService, private notificationS: NotificationService ) { }

  ngOnInit(): void {
    this.currentDate = this.dateService.getCurrentDate();
    this.notificationS.notificationSubject.subscribe(d => {
    this.notificationMessage= d;
    })
  }
  // getDate() {
  //   // this.currentDate = this.dateService.getCurrentDate();
  // }
}