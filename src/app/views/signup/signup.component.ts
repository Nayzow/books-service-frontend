import {Component, ViewChild} from '@angular/core';
import {SignupData} from "../../models/SignupData";
import {UsersService} from "../../services/UsersService";
import {PopupComponent} from "../../components/popup/popup.component";
import {Router} from "@angular/router";

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

  constructor(private userService: UsersService, private router: Router) { }

  onSubmit() {
    this.userService.createUser(this.signupData).subscribe(
      () => {
        this.title = 'Bravo ' + this.signupData.username + ' !';
        this.message = 'Votre compte a bien été crée !';
        this.popupComponent.displayPopup();
        this.userService.findUserByUsernameAndPassword(this.signupData.username, this.signupData.password)
          .subscribe(
            user => {
              this.title = 'Bravo !';
              this.message = `Vous êtes connecté en tant que ${user.username} !`;
              this.popupComponent.displayPopup();
              // Redirection vers '/users/{id}'
              this.router.navigate(['/users', user.id]);
            },
            error => {
              this.title = 'Erreur';
              this.message = 'Nom d\'utilisateur ou mot de passe incorrect !';
              this.popupComponent.displayPopup();
            }
          );
      },
      () => {
        this.title = 'Erreur !';
        this.message = "Le nom d'utilisateur ou l'adresse e-mail ne sont pas disponibles !";
        this.popupComponent.displayPopup();
      }
    );
  }
}
