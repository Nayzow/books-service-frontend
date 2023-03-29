import {BookDetails} from "../models/BookDetails";
import {Injectable} from "@angular/core";
import {Book} from "../models/Book";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Book[]> {
    let url = environment.apiUrl + '/books';
    return this.http.get<Book[]>(url);
  }

  findById(id: string | null = null): Observable<BookDetails> {
    let url = environment.apiUrl + '/books/';
    if (id) {
      url += encodeURI(id);
    }
    return this.http.get<BookDetails>(url);
  }

  findByName(name: string | null = null): Observable<Book[]> {
    let url = environment.apiUrl + '/book/';
    if (name) {
      url += encodeURI(name);
    }
    return this.http.get<Book[]>(url);
  }
}
