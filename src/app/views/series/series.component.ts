import {Component, Input, OnInit} from '@angular/core';
import {BooksService} from "../../services/BooksService";
import {Book} from "../../models/Book";
import {Serie} from "../../models/Serie";
import {SeriesService} from "../../services/SeriesService";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  @Input() series: Serie[] = [];
  constructor(private serieService: SeriesService) { }
  async submit(term: any) {
    await this.serieService.findByName(term).subscribe(series => this.series = series);
  }

  ngOnInit() {
    this.serieService.findAll().subscribe(series => this.series = series)
  }
}
