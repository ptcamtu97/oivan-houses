import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINT } from '../shared/constants';
import { ResponseLogin } from '../shared/interfaces';

@Injectable()
export class LoginService {
  http = inject(HttpClient);

  login(username: string, password: string): Observable<ResponseLogin> {
    return this.http.post<ResponseLogin>(`${ENDPOINT}/auth`, {
      data: {
        type: 'auth',
        attributes: {
          username,
          password,
        },
      },
    });
  }
}
