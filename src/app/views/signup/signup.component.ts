import { Component } from '@angular/core';
import {SignupData} from "../../models/SignupData";
import {UsersService} from "../../services/UsersService";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData: SignupData = {
    email: '',
    username: '',
    password: ''
  };

  constructor(private userService: UsersService) {}

  onSubmit() {
    this.userService.createUser(this.signupData).subscribe(
      (response) => {
        console.log('User created successfully', response);
        // you can add here some code to redirect the user to the login page, for example
      },
      (error) => {
        console.error('Error creating user', error);
        // you can add here some code to display an error message to the user, for example
      }
    );
  }
}
