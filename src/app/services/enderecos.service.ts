import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnderecoModel } from '../models/endereco-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

  apiUrl = "https://localhost:7147/api/endereco";

  constructor(
    private http: HttpClient,
  ) { }

  buscarTodosEnderecos(){
    return this.http.get<EnderecoModel[]>(this.apiUrl)
  }

  buscarEnderecosPorCep(cep : string){
    return this.http.get(this.apiUrl + '/' + cep);
  }
}
