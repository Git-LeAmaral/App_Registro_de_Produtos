import { Produto } from './../models/Produtos';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = `${enviroment.ApiUrl}/Produto`

  constructor(private http: HttpClient) { }

  GetProdutos() : Observable<Response<Produto[]>> {
    return this.http.get<Response<Produto[]>>(this.apiUrl);
  }

  GetProduto(id : number) : Observable<Response<Produto>> {
    return this.http.get<Response<Produto>>(`${this.apiUrl}/${id}`);
  }

  CreateProduto(produto: Produto) : Observable<Response<Produto[]>> {
    return this.http.post<Response<Produto[]>>(`${this.apiUrl}`, produto);
  }

  EditarProduto(produto: Produto) : Observable<Response<Produto[]>> {
    return this.http.put<Response<Produto[]>>(`${this.apiUrl}`, produto);
  }

  DisponivelProduto(id: number) : Observable<Response<Produto[]>>{
    return this.http.put<Response<Produto[]>>(`${this.apiUrl}/disponivelProduto/${id}`, id)
  }

  ExcluirProduto(id: number) : Observable<Response<Produto[]>> {
    return this.http.delete<Response<Produto[]>>(`${this.apiUrl}?id=${id}`);
  }
}
