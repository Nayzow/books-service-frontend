import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BooksService} from "../../services/BooksService";
import {BookDetails} from "../../models/BookDetails";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  book$!: Observable<BookDetails>;
  id: string | null = null;

  constructor(private booksService: BooksService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.book$ = this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap(id => this.booksService.findById(id)),
        tap(() => {
          window.scrollTo({top: 0, behavior: 'smooth'});
        })
      )
  }
}
