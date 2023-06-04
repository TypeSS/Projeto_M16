import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';
import { Categoria, Reserva, Restaurante } from 'src/app/models/Restaurante/restaurante';


@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getRestaurantes():Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>(this.urlService.getUrl("restaurantes"));
    }

  getCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlService.getUrl("categorias"));
  }

  criarRes(resinfo:object):Observable<any>{
    return this.http.post<any>(this.urlService.getUrl("reservas"), resinfo)
  }
}
