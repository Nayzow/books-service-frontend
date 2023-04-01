import {Component, Input, OnInit} from '@angular/core';
import {Serie} from "../../models/Serie";
import {SeriesService} from "../../services/SeriesService";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css', "../../../styles.css"],
  animations: [
    trigger('seriesAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          style({opacity: 0}),
          stagger(220, [animate('1s', style({opacity: 1}))])
        ], {optional: true})
      ])
    ])
  ]
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
