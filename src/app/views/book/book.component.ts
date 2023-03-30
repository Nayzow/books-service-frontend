import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/Book";
import {BooksService} from "../../services/BooksService";
import * as URL from 'url';
import {BookDetails} from "../../models/BookDetails";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
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
