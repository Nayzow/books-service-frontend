import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import {BooksComponent} from "./views/books/books.component";
import {BookComponent} from "./views/book/book.component";
import {UserComponent} from "./views/user/user.component";
import {SeriesComponent} from "./views/series/series.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:book', component: BookComponent },
  { path: 'user/:user', component: UserComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
