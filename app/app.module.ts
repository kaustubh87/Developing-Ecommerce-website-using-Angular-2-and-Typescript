import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import { BooksListComponent } from './books/books-list/books-list.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './shared/highlight.directive';
import {TruncatePipe} from './shared/pipes/truncate.pipe';
import { FavoriteComponent } from './favorites/favorite.component';
import { BookService } from './books/book.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, BooksListComponent, HighlightDirective, TruncatePipe, FavoriteComponent],
  bootstrap:    [ AppComponent],
  providers: [BookService]
})

export class AppModule { }