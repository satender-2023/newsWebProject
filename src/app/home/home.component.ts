import { Component, OnInit } from '@angular/core';
import { CurrentDateService } from '../current-date.service';
import { NotificationService } from '../notification.service';
// import { CurrentDateService } from '../current-date.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentDate: any;
  notificationMessage: any;
  constructor(private dateService: CurrentDateService, private notificationS: NotificationService) { }

  ngOnInit(): void {
    this.currentDate = this.dateService.getCurrentDate();
    this.notificationS.notificationSubject.subscribe(d => {
      this.notificationMessage = d;
    })
  }
}
