import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './shared/highlight.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BooksListComponent, HighlightDirective],
  bootstrap:    [ AppComponent]
})

export class AppModule { }