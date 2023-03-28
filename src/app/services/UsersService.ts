import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../models/User";
import {UserDetails} from "../models/UserDetails";

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
}
