
//import { Component, OnInit , OnChanges} from '@angular/core';

import { Component } from '@angular/core';

//import { IBook } from '../book';


@Component({
    moduleId: module.id,
    selector: 'bs-books-list',
    templateUrl: '../books-list/books-list.component.html'
})

export class BooksListComponent {

    showMessage: string = 'test';

    imageWidth: number = 100;
    showImage: boolean = true;
    booksInStock: number = 2;


    books: any[]= [{
    author: "Tom Jones",
    bookTitle: "War and Peace 2",
    bookPrice: 29.95,
    booksInStock: 15,
    bookDescription: "Book of fiction",
    publishedOn: new Date('02/11/1921'),
    inStock: 'yes',
    bookReviews:  15,
    bookImageUrl: "app/assets/images/656.jpg"
    }]
    
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    onNotifyClicked(message: string):void {
        this.showMessage = message;
    }

}