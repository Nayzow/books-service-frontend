import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../services/BooksService";
import {BookDetails} from "../../models/BookDetails";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, switchMap, tap} from "rxjs";
import {Comment} from "../../models/Comment";
import {SeriesService} from "../../services/SeriesService";
import {Book} from "../../models/Book";
import {BookStatement} from "../../models/BookStatement";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  book$!: Observable<BookDetails>;
  comments$!: Observable<Comment[]>;
  booksStatement$!: Observable<BookStatement[]>;
  otherBooks$!: Observable<Book[]>;

  constructor(private booksService: BooksService, private seriesService: SeriesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.book$ = this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap(id => this.booksService.findById(id)),
        tap(() => {
          window.scrollTo({top: 0, behavior: 'smooth'});
        })
      )

    this.comments$ = this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap(id => this.booksService.findAllCommentsByBookId(id)))

    this.booksStatement$ = this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap(id => this.booksService.findAllBookStatementsByBookId(id))
      )

    this.otherBooks$ = this.book$.pipe(
      map((bookDetails) => bookDetails.serie.id),
      switchMap(id => this.seriesService.findAllBooksByIdSerie(id))
    )
  }
}
