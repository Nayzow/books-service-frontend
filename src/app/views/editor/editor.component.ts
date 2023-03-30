import {Component, OnInit} from '@angular/core';
import * as URL from 'url';
import {EditorsService} from "../../services/EditorsService";
import {EditorDetails} from "../../models/EditorDetails";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: EditorDetails | null = null;
  path: string | null = null;
  id: string | null = null;
  constructor(private editorsService: EditorsService) {
    this.path = URL.parse(window.location.href).pathname;
    // @ts-ignore
    this.id = this.path.split('/').pop();
  }
  ngOnInit() {
    this.editorsService.findById(this.id).subscribe(editor => this.editor = editor)
  }
}
