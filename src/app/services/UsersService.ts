import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../models/User";
import {UserDetails} from "../models/UserDetails";
import {SignupData} from "../models/SignupData";
import {Borrowing} from "../models/Borrowing";

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  findAll(): Observable<User[]> {
    let url = environment.apiUrl + '/users/';
    return this.http.get<User[]>(url);
  }

  findById(id: string | null = null): Observable<UserDetails> {
    let url = environment.apiUrl + '/users/';
    if (id) {
      url += encodeURI(id);
    }
    return this.http.get<UserDetails>(url);
  }

  createUser(signupData: SignupData): Observable<SignupData> {
    let url = environment.apiUrl + '/users';
    return this.http.post<SignupData>(url, signupData);
  }

  findAllBorrowingsByUserId(id: bigint): Observable<Borrowing[]> {
    let url = environment.apiUrl + '/users/';
    if (id) {
      url += encodeURI(String(id)) + '/borrowings';
    }
    return this.http.get<Borrowing[]>(url);
  }

  findUserByUsernameAndPassword(username: string, password: string): Observable<UserDetails> {
    let url = environment.apiUrl + '/auth/login';
    if (username && password) {
      url += `?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    }
    return this.http.get<UserDetails>(url);
  }
}
