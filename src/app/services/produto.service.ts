import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Produto } from '../models/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = `${enviroment.ApiUrl}/Produto`

  constructor(private http: HttpClient) { }

  GetProdutos() : Observable<Response<Produto[]>> {
    return this.http.get<Response<Produto[]>>(this.apiUrl)
  }
}
