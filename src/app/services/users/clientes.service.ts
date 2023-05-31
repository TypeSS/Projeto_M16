import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users/users';
import { Reserva } from 'src/app/models/Restaurante/restaurante';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getCliente():Observable<Users[]>{
    return this.http.get<Users[]>(this.urlService.getUrl('teste'));
  }

  fazerReserva(info: object):Observable<Reserva[]>{
    return this.http.post<Reserva[]>(this.urlService.getUrl('reserva'),info);
  }
}
