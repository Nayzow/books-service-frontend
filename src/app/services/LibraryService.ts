import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Borrowing} from "../models/Borrowing";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  constructor(private http: HttpClient) {
  }

  findAllBorrowingsByLibraryId(id: bigint): Observable<Borrowing[]> {
    let url = environment.apiUrl + '/libraries/';
    if (id) {
      url += encodeURI(String(id)) + '/borrowings'
    }
    return this.http.get<Borrowing[]>(url)
  }
}
