import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/Book";
import {BooksService} from "../../services/BooksService";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
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
