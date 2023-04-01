import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Serie} from "../models/Serie";
import {SerieDetails} from "../models/SerieDetails";

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Serie[]> {
    let url = environment.apiUrl + '/series';
    return this.http.get<Serie[]>(url);
  }

  findById(id: string | null = null): Observable<SerieDetails> {
    let url = environment.apiUrl + '/series/';
    if (id) {
      url += encodeURI(id);
    }
    return this.http.get<SerieDetails>(url);
  }

  findAllBooksByIdSerie(id: string | null = null): Observable<Serie> {
    let url = environment.apiUrl + '/series/';
    if (id) {
      url += encodeURI(id) + '/books';
    }

    return this.http.get<Serie>(url);
  }

  findByName(name: string | null = null): Observable<Serie[]> {
    let url = environment.apiUrl + '/series/';
    if (name) {
      url += encodeURI(name);
    }
    return this.http.get<Serie[]>(url);
  }
}
