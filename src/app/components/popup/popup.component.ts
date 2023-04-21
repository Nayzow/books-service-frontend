import { Component, Input, Renderer2, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [
    trigger('showHide', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class PopupComponent {
  @Input() popupTitle!: string;
  @Input() popupMessage!: string;

  showPopup = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  displayPopup(): void {
    this.showPopup = true;
    this.renderer.addClass(this.el.nativeElement.querySelector('.popup-container'), 'show-popup');
  }

  hidePopup(): void {
    this.showPopup = false;
  }
}
