import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as env } from '@env/environment';
import { IUserHttp } from '../../models/http/user-http.interface';

@Injectable()
export class UserService {

  userUrl = `${env.apiUrl}/users.json`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUserHttp> {
    return this.http.get<IUserHttp>(this.userUrl);
  }
}
