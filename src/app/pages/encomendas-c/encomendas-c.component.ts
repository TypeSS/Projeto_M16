import { Component, OnInit } from '@angular/core';
import { Encomendas } from 'src/app/models/Restaurante/restaurante';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';
import { TreeNode } from 'primeng/api';
import { ProdEnc } from 'src/app/models/produtos/produtos';

@Component({
  selector: 'app-encomendas-c',
  templateUrl: './encomendas-c.component.html',
  styleUrls: ['./encomendas-c.component.css']
})
export class EncomendasCComponent implements OnInit {

  encomendas:Encomendas[] = [];
  selectedEnc?:Encomendas;
  abrirEnc:boolean = false;
  prodInfo:ProdEnc[] = [];

  constructor(private restService: RestauranteService){}

  ngOnInit() {
    this.restService.getEncomendaCli(Number(localStorage.getItem("id"))).subscribe((res)=>{
      this.encomendas = res
    })
  }

  encInfo(){
    this.abrirEnc = true;
    console.log(this.selectedEnc?.estado)
    this.restService.getProdEnc(this.selectedEnc!.id_encomenda).subscribe((res)=>{
      this.prodInfo = res
    });
  }

}

