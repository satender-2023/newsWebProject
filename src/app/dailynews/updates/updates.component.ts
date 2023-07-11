import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/notification.service';
import { CurrentDateService } from './../../current-date.service';
@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  currentDate: any;
  notificationMessage:string | undefined;
  constructor(private dateService: CurrentDateService, private notificationS: NotificationService) { }

  ngOnInit(): void {
    this.getDate();
    this.notificationS.notificationSubject.subscribe(d => {
      this.notificationMessage = d;})
  }
  getDate() {
    this.currentDate = this.dateService.getCurrentDate();
  }

}