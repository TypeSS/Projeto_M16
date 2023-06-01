import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';
import { Produtos } from 'src/app/models/produtos/produtos';

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
}
