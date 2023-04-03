import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../models/User";
import {Comment} from "../models/Comment";

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Comment[]> {
    let url = environment.apiUrl + '/comments/';
    return this.http.get<Comment[]>(url);
  }

  findById(id: string | null = null): Observable<Comment> {
    let url = environment.apiUrl + '/comments/';
    if (id) {
      url += encodeURI(id);
    }
    return this.http.get<Comment>(url);
  }
  postComment(id_book: bigint, content: string, date: string, user: User): Observable<Comment> {
    const url = environment.apiUrl + '/comments';
    const comment = { id_book, content, date, user };
    return this.http.post<Comment>(url, comment);
  }
}
