import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IBook } from './book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class BookService{
    
    constructor(private _http: Http){

    }

    getBooks(): Observable<IBook[]>{

        return this._http.get('api/books/books.json')
        .map((response: Response) => <IBook[]> response.json());
    }

}