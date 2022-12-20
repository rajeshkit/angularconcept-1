import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
 
  private http:HttpClient;

  constructor(http1:HttpClient) {
    this.http=http1;
   
   }
  getAlbums(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  }