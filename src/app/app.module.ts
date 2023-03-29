import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FooterComponent} from "./components/footer/footer.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SearchbarComponent} from "./components/searchbar/searchbar.component";
import {HomeComponent} from "./views/home/home.component";
import {UserComponent} from "./views/user/user.component";
import {BooksComponent} from "./views/books/books.component";
import {BookComponent} from "./views/book/book.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SeriesComponent} from "./views/series/series.component";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    BooksComponent,
    BookComponent,
    SeriesComponent,
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
export class AppModule { }
