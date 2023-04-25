import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from './dog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor( private http: HttpClient ) { }

  getDog() : Observable<Dog> {
    return this.http.get<Dog>("https://dog.ceo/api/breeds/image/random");
   }
}
