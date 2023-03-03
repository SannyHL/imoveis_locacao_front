import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  apiUrl = "https://localhost:7147/api/cliente";

  constructor(
    private http: HttpClient,
  ) { }

  buscarTodosClientes(){
    return this.http.get(this.apiUrl)
  }

  buscarClientePorId(id : number) : Observable<any>{
    return this.http.get(this.apiUrl + id);
  }

  atualizarCliente(cliente: any, id:number): Observable<any>{
    return this.http.put(this.apiUrl + 'atualiza-cliente/' + id, cliente)
  }

  criarCliente(cliente: any): Observable<any>{
    return this.http.post(this.apiUrl, cliente)
  }
}
