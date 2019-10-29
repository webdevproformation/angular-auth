import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// HttpHeaders => envoyer des entête http

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:5000/api/articles';

  create(dataForm) {
    const token = localStorage.getItem('token');

    const options = {
      headers: new HttpHeaders({
        'x-auth': token
      })
    };

    return this.http.post(this.url, dataForm, options);
  }
}
