import { Component, OnInit } from '@angular/core';
import { EncomendaTree } from 'src/app/models/Restaurante/restaurante';
import { RestauranteService } from 'src/app/services/restaurante/restaurante.service';
import { TreeNode } from 'primeng/api';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-encomendas-c',
  templateUrl: './encomendas-c.component.html',
  styleUrls: ['./encomendas-c.component.css']
})
export class EncomendasCComponent implements OnInit {

  files!: TreeNode[];
  encInfo:EncomendaTree[] = [];
  lookup:any;
  cols: Column[];
  selectedFile!: TreeNode<any> | TreeNode<any>[] | null;


  constructor(private restaurantes:RestauranteService){}
  ngOnInit() {
    this.restaurantes.treeEnc().subscribe((res) => {
      this.files = res
  })

  console.log(this.files)
  }
}

