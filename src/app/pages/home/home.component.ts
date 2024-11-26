import { Component, signal } from '@angular/core';
import { LabsComponent } from '../labs/labs.component'
import { CommonModule } from '@angular/common';

import { TareasModel } from '../models/tareas.models'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nombreExportado = 'Angel'
  
  //se crea una lista de Arreglo
  listas = signal<TareasModel[]>([
    {
      id: 1, 
      nombre: 'Angel',
      apellido: 'Garcia',
      edad: 25
    },
    {
      id: 2, 
      nombre: 'Cairis',
      apellido: 'Macias',
      edad: 25
    },
    {
      id: 3, 
      nombre: 'Mia',
      apellido: 'Cristina',
      edad: 25
    },
    {
      id: 4, 
      nombre: 'Angel Mateo',
      apellido: 'Quintero Macias',
      edad: 25
    },
  ])



  //Se realiza una funcion de tomar valor 
  OnclickAgregar(event: Event){
    const tomarValor = event.target as HTMLInputElement
    const agregarValor = tomarValor.value
    //console.log('===> ', this.listas.update(listas => [...listas, agregarValor]))
    //llamamos la funcion de addValorInput
    this.addValorInput(agregarValor)

    
    // if(agregarValor !== ''){
    //   //this.listas.push(agregarValor)
    //   this.listas.update([...listas, agregarValor])
    // }
  }

  //Creamos una funcion para separar la funcion de agregar en la lista un valor
  addValorInput(nombre: string){
    const agregarValor = {
      id: 5,
      nombre,
      apellido: 'Yahew',
      edad: 33
    };
    this.listas.update(listas => [...listas, agregarValor])
  }

  //Se realiza una funcion para poder Eliminar el Evento
  OnClickDelete(index: number){
    //const eliminarValor = event.target
    const eliminarUsuario = this.listas.update(lista => lista.filter((lista, valorIndex) => valorIndex !== index));
    console.log('==> ', eliminarUsuario)
  }



}
