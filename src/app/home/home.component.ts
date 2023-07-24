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

  allowDrop(event: Event) {
    event.preventDefault();
  }

  drag(event: DragEvent) {
    event.dataTransfer!.setData('text', (event.target as HTMLElement).id);
  }

  drop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer!.getData('text');
    const dropzone = event.target as HTMLElement;
    dropzone.appendChild(document.getElementById(data)!);
  }
}
