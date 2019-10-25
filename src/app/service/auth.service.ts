import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  url = 'http://localhost:5000/api/connexion';

  // d'habitude => CRUD

  login(credentials) {
    // appel à une API
    // observable
    // opérateur d'observable
    return this.http.post(this.url, credentials).pipe(
      map(resp => {
        if (resp['token']) {
          localStorage.setItem('token', resp['token']);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  logoutBack() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    //si on a token en localstorage vérifier qu'il est bien conforme

    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);

    return !isExpired;
  }
}
