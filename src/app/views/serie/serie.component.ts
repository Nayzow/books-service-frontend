import {Component, OnInit} from '@angular/core';
import * as URL from 'url';
import {SerieDetails} from "../../models/SerieDetails";
import {SeriesService} from "../../services/SeriesService";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  serie: SerieDetails | null = null;
  path: string | null = null;
  id: string | null = null;
  constructor(private seriesService: SeriesService) {
    this.path = URL.parse(window.location.href).pathname;
    // @ts-ignore
    this.id = this.path.split('/').pop();
  }
  ngOnInit() {
    this.seriesService.findById(this.id).subscribe(serie => this.serie = serie)
  }
}
