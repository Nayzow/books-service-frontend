import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Serie} from "../models/Serie";
import {Editor} from "../models/Editor";
import {EditorDetails} from "../models/EditorDetails";

@Injectable({
  providedIn: 'root',
})
export class EditorsService {
  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Editor[]> {
    let url = environment.apiUrl + '/editors';
    return this.http.get<Editor[]>(url);
  }

  findById(id: string | null = null): Observable<EditorDetails> {
    let url = environment.apiUrl + '/editors/';
    if (id) {
      url += encodeURI(id);
    }
    return this.http.get<EditorDetails>(url);
  }

  findAllBooksByIdSerie(id: string | null = null): Observable<Editor> {
    let url = environment.apiUrl + '/editors/';
    if (id) {
      url += encodeURI(id) + '/series';
    }

    return this.http.get<Editor>(url);
  }

  findByName(name: string | null = null): Observable<Editor[]> {
    let url = environment.apiUrl + '/editors';
    if (name) {
      url += `?name=${encodeURIComponent(name)}`;
    }
    return this.http.get<Serie[]>(url);
  }
}
