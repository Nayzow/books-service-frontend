import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/Book";
import {BooksService} from "../../services/BooksService";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  animations: [
    trigger('booksAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          style({opacity: 0}),
          stagger(220, [animate('1s', style({opacity: 1}))])
        ], {optional: true})
      ])
    ])
  ]
})
export class BooksComponent implements OnInit {
  @Input() books: Book[] = [];

  constructor(private booksService: BooksService) { }

  async submit(term: any) {
    await this.booksService.findByName(term).subscribe(books => this.books = books);
  }

  ngOnInit() {
    this.booksService.findAll().subscribe(books => this.books = books)
  }
}
