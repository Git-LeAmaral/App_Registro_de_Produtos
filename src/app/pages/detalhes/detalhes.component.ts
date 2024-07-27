import { Produto } from 'src/app/models/Produtos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit{

  produto? : Produto;
  id! : number;


  constructor(private produtoService : ProdutoService, private route:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.produtoService.GetProduto(this.id).subscribe((data) => {

      const dataConvertida = data.dados;

      dataConvertida.dataDeEntrada = new Date(dataConvertida.dataDeEntrada!).toLocaleDateString('pt-BR');
      dataConvertida.dataDeAlteracao = new Date(dataConvertida.dataDeAlteracao!).toLocaleDateString('pt-BR');

      this.produto = data.dados;
      //console.log(this.produto);

    })
  }

  DisponivelProduto() {
    this.produtoService.DisponivelProduto(this.id).subscribe((data) => {
      //console.log('Atualizado com sucesso', data);
      this.router.navigate(['']);
      })
  }
}
