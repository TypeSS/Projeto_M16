import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users/users';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getCliente():Observable<Users[]>{
    return this.http.get<Users[]>(this.urlService.getUrl('teste'));
  }
}
