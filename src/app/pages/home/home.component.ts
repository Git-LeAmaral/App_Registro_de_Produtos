import { Produto } from 'src/app/models/Produtos';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  produtos: Produto[] = []
  produtosGeral: Produto[] = []

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.GetProdutos().subscribe(data => {
      //console.log(data);
      const dados = data.dados;

      dados.map((item) => {
        //console.log(item)
        item.dataDeEntrada = new Date(item.dataDeEntrada!).toLocaleDateString('pt-BR')
        item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR')
      })
      //console.log(dados);

      this.produtos = data.dados;
      this.produtosGeral = data.dados;

    })
  }

  search(event : Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    // console.log(value);

    this.produtos = this.produtosGeral.filter(produto => {
      return produto.nome.toLowerCase().includes(value);
    })
  }
}
