import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BooksService} from "../../services/BooksService";
import * as URL from 'url';
import {BookDetails} from "../../models/BookDetails";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  book: BookDetails | null = null;
  path: string | null = null;
  id: string | null = null;
  @ViewChild('list') list: ElementRef | null = null;
  itemWidth = 150; // Largeur d'un élément de la liste
  visibleItems = 5; // Nombre d'éléments visibles à la fois dans la liste
  constructor(private booksService: BooksService) {
    this.path = URL.parse(window.location.href).pathname;
    // @ts-ignore
    this.id = this.path.split('/').pop();
  }

  updateVisibleItems() {
    // Mettre à jour le nombre d'éléments visibles dans la liste en fonction de la largeur de la fenêtre
    // @ts-ignore
    const width = this.list.nativeElement.offsetWidth;
    this.visibleItems = Math.floor(width / this.itemWidth);
  }

  scrollLeft() {
    // Fait défiler la liste vers la gauche d'un certain nombre d'éléments
    // @ts-ignore
    this.list.nativeElement.scrollBy({
      left: -this.itemWidth * this.visibleItems,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    // Fait défiler la liste vers la droite d'un certain nombre d'éléments
    // @ts-ignore
    this.list.nativeElement.scrollBy({
      left: this.itemWidth * this.visibleItems,
      behavior: 'smooth'
    });
  }
  ngOnInit() {
    this.booksService.findById(this.id).subscribe(book => this.book = book)
    window.addEventListener('resize', () => {
      this.updateVisibleItems();
    });
    this.updateVisibleItems();
  }
}
