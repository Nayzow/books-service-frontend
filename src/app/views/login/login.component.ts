import {Component, ViewChild} from '@angular/core';
import {PopupComponent} from "../../components/popup/popup.component";
import {UsersService} from "../../services/UsersService";
import {LoginData} from "../../models/LoginData";
import {map} from "rxjs";
import {Router} from "@angular/router";

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
    username: 'batman',
    password: 'batword'
  }

  constructor(private userService: UsersService, private router: Router) {
  }

  onSubmit() {
    this.userService.findUserByUsernameAndPassword(this.loginData.username, this.loginData.password)
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
  }
}
