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
    return this.http.get<Users[]>(this.urlService.getUrl('users'));
  }

  getClienteID(id:number):Observable<Users>{
    return this.http.get<Users>(this.urlService.getUrl('user/'+id))
  }

  updateCliente(info:Users):Observable<Users>{
    return this.http.put<Users>(this.urlService.getUrl("updateuser"), info)
  }

  deleteCli(id:number):Observable<any>{
    return this.http.delete(this.urlService.getUrl("cliente/"+id))
  }

}
