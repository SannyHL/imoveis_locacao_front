import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../models/cliente-model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiUrl = "https://localhost:7147/api/cliente";

  constructor(
    private http: HttpClient,
  ) { }

  buscarTodosClientes(){
    return this.http.get<ClienteModel[]>(this.apiUrl)
  }

  buscarClientePorId(id : number) : Observable<any>{
    return this.http.get(this.apiUrl + id);
  }

  atualizarCliente(clientes: any, id:number): Observable<any>{
    return this.http.put<any>(this.apiUrl + '/atualiza-cliente/' + id, clientes)
  }

  criarCliente(clientes: any): Observable<any>{
    debugger
    return this.http.post<any>(this.apiUrl, clientes)
  }
}
