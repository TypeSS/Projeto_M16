import { Component, OnInit } from '@angular/core';
import { Ocasioes, PratoDoDia } from 'src/app/models/produtos/produtos';
import { ProdutosService } from 'src/app/services/produtos/produtos.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {

  ocasioes: Ocasioes[];
  pratosDoDia: PratoDoDia[];
  constructor(private prodinfo: ProdutosService){}


  ngOnInit() {
    this.prodinfo.getOcasioes().subscribe((res)=>{
      this.ocasioes = res;
      console.log(this.ocasioes)
    })
  }

  getPratoDoDia(id:number){
    this.prodinfo.getPratoDoDia(id).subscribe((res)=>{
      this.pratosDoDia = res
      console.log(this.pratosDoDia)
    })
  }


}
