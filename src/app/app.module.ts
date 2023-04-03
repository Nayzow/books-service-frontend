import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {FooterComponent} from "./components/footer/footer.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SearchbarComponent} from "./components/searchbar/searchbar.component";
import {HomeComponent} from "./views/home/home.component";
import {UserComponent} from "./views/user/user.component";
import {BooksComponent} from "./views/books/books.component";
import {BookComponent} from "./views/book/book.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SeriesComponent} from "./views/series/series.component";
import {SerieComponent} from "./views/serie/serie.component";
import {EditorsComponent} from "./views/editors/editors.component";
import {EditorComponent} from "./views/editor/editor.component";
import {ScrollableBooksListComponent} from "./components/scrollableBooksList/scrollableBooksList.component";
import {CommentsComponent} from "./components/comments/comments.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    ScrollableBooksListComponent,
    CommentsComponent,
    HomeComponent,
    UserComponent,
    BooksComponent,
    BookComponent,
    SeriesComponent,
    SerieComponent,
    EditorsComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
