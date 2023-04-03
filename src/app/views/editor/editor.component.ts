import {Component, OnInit} from '@angular/core';
import {EditorsService} from "../../services/EditorsService";
import {EditorDetails} from "../../models/EditorDetails";
import {map, Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor$!: Observable<EditorDetails>;

  id: string | null = null;
  constructor(private editorsService: EditorsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.editor$ = this.activatedRoute.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap(id => this.editorsService.findById(id))
      )
  }
}
