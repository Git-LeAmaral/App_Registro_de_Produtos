import { ProdutoService } from 'src/app/services/produto.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Produto } from 'src/app/models/Produtos';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit{

  inputData: any;
  produto!: Produto

  constructor(private produtoService: ProdutoService,
                private router: Router,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private ref:MatDialogRef<ExcluirComponent>
  ) {}

  ngOnInit(): void {
    this.inputData = this.data;

    this.produtoService.GetProduto(this.inputData.id).subscribe((data) => {
      this.produto = data.dados;

      //console.log(this.inputData.id);
    })
  }

  Excluir() {
    this.produtoService.ExcluirProduto(this.inputData.id).subscribe((data) => {
      this.ref.close();
      //console.log(this.inputData.id);
    })
  }
}
