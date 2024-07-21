import { ProdutoService } from './../../services/produto.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produtos';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private produtoService : ProdutoService, private router: Router) {

  }

  createProduto(produto: Produto) {
    this.produtoService.CreateProduto(produto).subscribe((data) => {
      //console.log(data);
      this.router.navigate(['/'])
    })
  }

}
