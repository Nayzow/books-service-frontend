import {Component, OnInit} from '@angular/core';
import {SerieDetails} from "../../models/SerieDetails";
import {SeriesService} from "../../services/SeriesService";
import {map, Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  serie$!: Observable<SerieDetails>;
  path: string | null = null;
  id: string | null = null;

  constructor(private seriesService: SeriesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.serie$ = this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap(id => this.seriesService.findById(id))
      )
  }
}
