import { EnderecoModel } from './../models/endereco-model';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { ClienteModel } from '../models/cliente-model';
import { FormGroup, NgForm } from '@angular/forms';
import { EnderecosService } from '../services/enderecos.service';
import { ClienteEnderecoModel } from '../models/cliente-enderecos-model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listaClientes: ClienteModel[] = [];
  enderecos!: EnderecoModel;
  listaClientesComEndereco: any;
  displayedColumns: string[] = ['nome', 'cpfCnpj', 'email', 'telefone', 'numeroCasa', 'cep', 'rua', 'bairro', 'cidade', 'estado'];
  cadastrarcliete: boolean = false;
  dadosFormulario: any;
  clienteEndereco!: any;
  dataSource: any;
  @ViewChild('formulario', {static: false}) formulario: NgForm | undefined;
  constructor(
    private clientesService : ClientesService,
    private enderecoService : EnderecosService,
  ){
    this.listaClientesComEndereco= [];
    this.dadosFormulario =[];
    this.clienteEndereco = []
  }
  ngOnInit(): void {
    this.buscarTodosCliente()

  }
  buscarTodosCliente(){
    this.clientesService.buscarTodosClientes().subscribe(res => {
      this.listaClientes = res;
      this.listaClientes.forEach(cliente => this.enderecoService.buscarEnderecosPorCep(cliente.enderecoCep.replace(/(.{5})/, '$1-')).subscribe(resposta => {
        this.enderecos = resposta
        this.clienteEndereco = {
          nome: cliente.nome,
          cpf: cliente.cpfCnpj,
          email: cliente.email,
          numeroCasa: cliente.numeroCasa,
          telefone: cliente.telefone,
          bairro:this.enderecos.bairro,
          cep:this.enderecos.cep,
          localidade:this.enderecos.localidade,
          logradouro:this.enderecos.logradouro,
          uf:this.enderecos.uf,
        }
        this.listaClientesComEndereco.push(this.clienteEndereco)
      }))
    })
    this.dataSource = new MatTableDataSource(this.listaClientesComEndereco);
    return this.dataSource;
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
