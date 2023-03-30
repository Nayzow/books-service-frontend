import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import {BooksComponent} from "./views/books/books.component";
import {BookComponent} from "./views/book/book.component";
import {UserComponent} from "./views/user/user.component";
import {SeriesComponent} from "./views/series/series.component";
import {SerieComponent} from "./views/serie/serie.component";
import {EditorsComponent} from "./views/editors/editors.component";
import {EditorComponent} from "./views/editor/editor.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'editors', component: EditorsComponent },
  { path: 'books/:id', component: BookComponent },
  { path: 'series/:id', component: SerieComponent },
  { path: 'editors/:id', component: EditorComponent },
  { path: 'user/:user', component: UserComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
