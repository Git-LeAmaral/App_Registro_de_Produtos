import { Produto } from 'src/app/models/Produtos';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  produtos: Produto[] = []
  produtosGeral: Produto[] = []

  colunas = ['Situação' ,'Código do Produto', 'Nome do Produto', 'Departamento', 'Quantidade', 'Tamanho', 'Preço', 'Ações', 'Excluir' ]

  constructor(private produtoService: ProdutoService, public dialog: MatDialog) {}

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

  OpenDialog(id : number) {
    console.log('esta clicando', id);

    this.dialog.open(ExcluirComponent, {
      width: '350px',
      height: '350px',
      data: {
        id: id
      }
    });
  }
}
