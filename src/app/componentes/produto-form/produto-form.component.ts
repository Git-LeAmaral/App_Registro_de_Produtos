import { Produto } from 'src/app/models/Produtos';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Produto>();

  produtoForm!: FormGroup

  constructor() {

  }

  ngOnInit(): void {

    this.produtoForm = new FormGroup({
      id: new FormControl(0),
      codigoDoProduto: new FormControl(''),
      nome: new FormControl(''),
      preco: new FormControl(''),
      departamento: new FormControl(''),
      quantidade: new FormControl(''),
      tamanho: new FormControl(''),
      disponivel: new FormControl(true),
      dataDeEntrada: new FormControl(new Date()),
      dataDealteracao: new FormControl(new Date())
    })

  }

  submit() {
    //console.log(this.produtoForm.value);
    this.onSubmit.emit(this.produtoForm.value)
  }

}
