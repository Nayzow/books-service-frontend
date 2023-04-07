import {Component, ViewChild} from '@angular/core';
import {PopupComponent} from "../../components/popup/popup.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('popup') popupComponent!: PopupComponent;
  title: string = '';
  message: string = '';


  onSubmit() {
    this.title = 'Bravo !';
    this.message = 'Vous êtes connecté en tant que !';
    this.popupComponent.displayPopup();
  }
}
