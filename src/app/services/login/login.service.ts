import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getLogin(userinfo:object):Observable<any>{
    return this.http.post<any>(this.urlService.getUrl("login"), userinfo)
  }
}
