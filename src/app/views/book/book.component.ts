import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../services/BooksService";
import {BookDetails} from "../../models/BookDetails";
import {ActivatedRoute} from "@angular/router";
import {map, Observable, switchMap, tap} from "rxjs";
import {Comment} from "../../models/Comment";
import {SeriesService} from "../../services/SeriesService";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  book$!: Observable<BookDetails>;
  comments$!: Observable<Comment[]>;
  otherBooks$!: Observable<BookDetails[]>;

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
        switchMap(id => this.booksService.findCommentsByBookId(id)))
    this.otherBooks$ = this.book$.pipe(
      map((bookDetails) => bookDetails.serie.id),
      switchMap(id => this.seriesService.findAllBooksByIdSerie(id))
    )
  }
}
