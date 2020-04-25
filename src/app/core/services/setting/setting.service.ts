import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '@env/environment';
import { Observable } from 'rxjs';
import { ISetting } from '@app/core/models/setting.interface';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  settingUrl = `${env.apiUrl}/setting.json`;

  constructor(private http: HttpClient) { }

  getSetting(): Observable<ISetting> {
    return this.http.get<ISetting>(this.settingUrl);
  }
}
