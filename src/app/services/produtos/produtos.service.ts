import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';
import { Ocasioes, PratoDoDia, Produtos } from 'src/app/models/produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getProdutos():Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.urlService.getUrl("produto"));
  }

  getProdutospCategoria(id:number):Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.urlService.getUrl("produtocategoria/"+id))
  }

  getOcasioes():Observable<Ocasioes[]>{
    return this.http.get<Ocasioes[]>(this.urlService.getUrl("Ocasioes"))
  }
  getPratoDoDia(id:number):Observable<PratoDoDia[]>{
    return this.http.get<PratoDoDia[]>(this.urlService.getUrl("pratosdodia/"+id))
  }
  
  getOcasiao(ocasiao:object):Observable<any>{
    return this.http.post<any>(this.urlService.getUrl('ocasiao'), ocasiao)
  }
}
