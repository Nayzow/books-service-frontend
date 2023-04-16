import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SearchbarComponent} from "./components/searchbar/searchbar.component";
import {HomeComponent} from "./views/home/home.component";
import {UserComponent} from "./views/user/user.component";
import {BooksComponent} from "./views/books/books.component";
import {BookComponent} from "./views/book/book.component";
import {SeriesComponent} from "./views/series/series.component";
import {SerieComponent} from "./views/serie/serie.component";
import {EditorsComponent} from "./views/editors/editors.component";
import {EditorComponent} from "./views/editor/editor.component";
import {ScrollableBooksListComponent} from "./components/scrollableBooksList/scrollableBooksList.component";
import {CommentsComponent} from "./components/comments/comments.component";
import {ScrollableSeriesListComponent} from "./components/scrollableSeriesList/scrollableSeriesList.component";
import {LoginComponent} from "./views/login/login.component";
import {SignupComponent} from "./views/signup/signup.component";
import {
  ScrollableBorrowingsListComponent
} from "./components/scrollableBorrowingsList/scrollableBorrowingsList.component";
import {
  ScrollableBooksStatementListComponent
} from "./components/scrollableBooksStatementList/scrollableBooksStatementList.component";
import {PopupComponent} from "./components/popup/popup.component";
import {LoadingComponent} from "./components/loading/loading.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    LoadingComponent,
    FooterComponent,
    ScrollableBooksListComponent,
    ScrollableSeriesListComponent,
    ScrollableBooksStatementListComponent,
    ScrollableBorrowingsListComponent,
    PopupComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    UserComponent,
    BooksComponent,
    BookComponent,
    SeriesComponent,
    SerieComponent,
    EditorsComponent,
    EditorComponent,
    CommentsComponent,
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
