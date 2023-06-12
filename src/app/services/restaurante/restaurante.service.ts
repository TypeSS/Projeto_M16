import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';
import { Categoria, ResCli, Reserva, Restaurante } from 'src/app/models/Restaurante/restaurante';


@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  find(arg0: (a: any) => boolean) {
    throw new Error('Method not implemented.');
  }

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

  getResCli(id:number):Observable<ResCli[]>{
    return this.http.get<ResCli[]>(this.urlService.getUrl("reservas/"+id))
  }

}
