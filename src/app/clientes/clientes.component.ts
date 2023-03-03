import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { ClienteModel } from '../models/cliente-model';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listaClientes: ClienteModel[] = [];
  displayedColumns: string[] = ['nome', 'cpfCnpj', 'email', 'telefone', 'numeroCasa', 'enderecoCep'];
  cadastrarcliete: boolean = false;
  dadosFormulario: any;
  @ViewChild('formulario', {static: false}) formulario: NgForm | undefined;
  constructor(
    private clientesService : ClientesService,
  ){

  }

  ngOnInit(): void {
    this.dadosFormulario =[];
    this.buscarTodosCliente()
  }

  buscarTodosCliente(){
    this.clientesService.buscarTodosClientes().subscribe(res => {
      this.listaClientes = res;
      console.table(this.listaClientes)
    })
  }

  cadastrarCliente(){
    this.cadastrarcliete = true
  }

  cadastrar(dadosFormulario: any){
    const formValue = this.formulario?.value;
    console.log(JSON.stringify(formValue))
    this.clientesService.criarCliente(formValue).subscribe( res => {
      console.log(res)
    },
    erro => {
      if(erro.status == 400) {
        console.log(erro);
      }
    })
  }
}
