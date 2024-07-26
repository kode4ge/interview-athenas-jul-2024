import { Component, Input } from '@angular/core';
import * as bootstrap from 'bootstrap';  // Import Bootstrap

@Component({
  selector: 'info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() button: string = 'Ok';

  openModal() {
    const modalElement = document.getElementById('info-modal');
    if (modalElement) {
      // Create a new Bootstrap Modal instance
      (new bootstrap.Modal(modalElement)).show();
    }
  }
}
