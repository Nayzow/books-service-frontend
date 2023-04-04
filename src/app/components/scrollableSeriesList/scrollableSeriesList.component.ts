import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {Serie} from "../../models/Serie";

@Component({
  selector: 'app-scrollableSeriesList',
  templateUrl: './scrollableSeriesList.component.html',
  styleUrls: ['../scrollableBooksList/scrollableBooksList.component.css', './scrollableSeriesList.component.css']
})
export class ScrollableSeriesListComponent implements OnInit {
  @Input() series: Serie[] | undefined;
  @ViewChild('list') list!: ElementRef;
  itemWidth: number = 150; // Largeur d'un élément de la liste
  visibleItems: number = 4; // Nombre d'éléments visibles à la fois dans la liste

  constructor() { }

  updateVisibleItems() {
    // Mettre à jour le nombre d'éléments visibles dans la liste en fonction de la largeur de la fenêtre
    const width = this.list.nativeElement.offsetWidth;
    this.visibleItems = Math.floor(width / this.itemWidth);
  }

  scrollLeft() {
    // Fait défiler la liste vers la gauche d'un certain nombre d'éléments
    this.list.nativeElement.scrollBy({
      left: -this.itemWidth * this.visibleItems,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.list.nativeElement.scrollBy({
      left: this.itemWidth * this.visibleItems,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.updateVisibleItems();
    });
    this.updateVisibleItems();
  }
}
