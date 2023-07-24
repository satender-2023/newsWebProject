import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
