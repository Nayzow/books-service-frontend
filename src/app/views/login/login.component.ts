import {Component, ViewChild} from '@angular/core';
import {PopupComponent} from "../../components/popup/popup.component";
import {UsersService} from "../../services/UsersService";
import {LoginData} from "../../models/LoginData";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('popup') popupComponent!: PopupComponent;
  title: string = '';
  message: string = '';
  loginData: LoginData = {
    username: '',
    password: ''
  }
  constructor(private userService: UsersService) { }

  onSubmit() {
    let user = this.userService.findUserByUsernameAndPassword(this.loginData.username, this.loginData.password);
    this.title = 'Bravo !';
    this.message = 'Vous êtes connecté en tant que ' + this.loginData.username + ' !';
    this.popupComponent.displayPopup();
  }
}
