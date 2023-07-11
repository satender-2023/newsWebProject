import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private notificationS : NotificationService) { }

  ngOnInit(): void {
  }
  sendMessage(data: { value: any; }){
    this.notificationS.sendNotification(data.value);
  }
}

