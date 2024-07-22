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

  produtoForm!: FormGroup

  constructor() {

  }

  ngOnInit(): void {

    this.produtoForm = new FormGroup({
      id: new FormControl(0),
      codigoDoProduto: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      preco: new FormControl('', [Validators.required]),
      departamento: new FormControl('', [Validators.required]),
      quantidade: new FormControl('', [Validators.required]),
      tamanho: new FormControl('', [Validators.required]),
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
