import {Component, ViewChild} from '@angular/core';
import {SignupData} from "../../models/SignupData";
import {UsersService} from "../../services/UsersService";
import {PopupComponent} from "../../components/popup/popup.component";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @ViewChild('popup') popupComponent!: PopupComponent;
  title: string = '';
  message: string = '';
  signupData: SignupData = {
    email: '',
    username: '',
    password: ''
  };

  constructor(private userService: UsersService) { }

  onSubmit() {
    this.userService.createUser(this.signupData).subscribe(
      () => {
        this.title = 'Bravo !';
        this.message = 'Votre compte a bien été crée !';
        this.popupComponent.displayPopup();
      },
      () => {
        this.title = 'Erreur !';
        this.message = "Le nom d'utilisateur ou l'adresse e-mail ne sont pas disponibles !";
        this.popupComponent.displayPopup();
      }
    );
  }
}
