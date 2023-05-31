import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';
import { Restaurante } from 'src/app/models/Restaurante/restaurante';


@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getRestaurantes():Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>(this.urlService.getUrl("restaurantes"));
    }
}
