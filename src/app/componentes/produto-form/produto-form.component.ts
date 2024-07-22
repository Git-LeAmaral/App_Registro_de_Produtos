import { Produto } from 'src/app/models/Produtos';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Produto>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosProduto: Produto | null = null;

  produtoForm!: FormGroup

  constructor() {

  }

  ngOnInit(): void {

    //console.log(this.dadosProduto);


    this.produtoForm = new FormGroup({
      id: new FormControl(this.dadosProduto ? this.dadosProduto.id : 0),
      codigoDoProduto: new FormControl(this.dadosProduto ? this.dadosProduto.codigoDoProduto : '', [Validators.required]),
      nome: new FormControl(this.dadosProduto ? this.dadosProduto.nome : '', [Validators.required]),
      preco: new FormControl(this.dadosProduto ? this.dadosProduto.preco : '', [Validators.required]),
      departamento: new FormControl(this.dadosProduto ? this.dadosProduto.departamento : '', [Validators.required]),
      quantidade: new FormControl(this.dadosProduto ? this.dadosProduto.quantidade :'', [Validators.required]),
      tamanho: new FormControl(this.dadosProduto ? this.dadosProduto.tamanho : '', [Validators.required]),
      disponivel: new FormControl(this.dadosProduto ? this.dadosProduto.disponivel : true),
      dataDeEntrada: new FormControl(new Date()),
      dataDealteracao: new FormControl(new Date())
    })

  }

  submit() {
    //console.log(this.produtoForm.value);
    this.onSubmit.emit(this.produtoForm.value)
  }

}
