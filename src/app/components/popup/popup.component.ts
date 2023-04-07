import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() popupTitle!: string;
  @Input() popupMessage!: string;

  showPopup = false;

  displayPopup(): void {
    this.showPopup = true;
  }

  hidePopup(): void {
    this.showPopup = false;
  }
}
