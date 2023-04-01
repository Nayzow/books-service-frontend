import {Component, OnInit} from '@angular/core';
import {BooksService} from "../../services/BooksService";
import * as URL from 'url';
import {BookDetails} from "../../models/BookDetails";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ["../../../styles.css", './book.component.css'],
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
export class BookComponent implements OnInit {
  book: BookDetails | null = null;
  path: string | null = null;
  id: string | null = null;
  constructor(private booksService: BooksService) {
    this.path = URL.parse(window.location.href).pathname;
    // @ts-ignore
    this.id = this.path.split('/').pop();
  }
  ngOnInit() {
    this.booksService.findById(this.id).subscribe(book => this.book = book)
  }
}
