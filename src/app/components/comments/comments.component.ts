import {Component, Input, ViewChild} from '@angular/core';
import {Comment} from "../../models/Comment";
import {CommentData} from "../../models/CommentData";
import {CommentService} from "../../services/CommentService";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @ViewChild('popup') popupComponent!: PopupComponent;
  title: string = '';
  message: string = '';
  @Input() comments!: Comment[];
  commentData: CommentData = {
    content: "",
    date: "07/04/2023",
    user: {
      id: "1"
    },
    book: {
      id: "1"
    }
  };
  constructor(private commentService: CommentService) { }

  onSubmit() {
    this.commentService.postComment(this.commentData).subscribe(
      () => {
        this.title = 'Bravo !';
        this.message = 'Votre commentaire a bien été posté !';
        this.popupComponent.displayPopup();
      },
      () => {
        this.title = 'Erreur !';
        this.message = "Vous devez être connecté afin de pouvoir poster des commentaires!";
        this.popupComponent.displayPopup();
      }
    )
  }
}
