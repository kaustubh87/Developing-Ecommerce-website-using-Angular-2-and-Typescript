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
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(
    [
      {path: 'books', component:BooksListComponent},
      {path: 'home', component: HomeComponent},
      { path: "", redirectTo:'home', pathMatch: 'full'},
      { path: '**', redirectTo:'home', pathMatch:'full'}
    ]
  )],
  declarations: [ AppComponent, BooksListComponent, HighlightDirective, TruncatePipe, 
    FavoriteComponent, HomeComponent],
  bootstrap:    [ AppComponent],
  providers: [BookService]
})

export class AppModule { }