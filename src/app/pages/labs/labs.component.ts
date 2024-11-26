import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})


export class LabsComponent {
  welcome = 'Bienvenido al curso de Angular'

  lista = ['Angel', 'Cairis', 'Mia', 'Angel MAteo']

  age = [34,34,8,4]

  //otra manera de asiganar valores es mediadnte objetos:

  personas = {
    name : 'Angel',
    age : 34,
    country : 'chile',
    img: 'https://cdn.pixabay.com/photo/2024/10/24/21/35/hippopotamus-9147023_1280.jpg',
    disable: true
  }

  //buttoh
  ClickHandler(){
    alert('Hola Mundo')
  }

  //Evento de un teclado
  clickteclado(event: Event){
    console.log('===> ',event)
  }

  //si queremos saber las letras que ha marcado
  clicktecladopulso(event: Event){
    const tomarvalordelInput = event.target as HTMLInputElement
    console.log(tomarvalordelInput.value)
  }

  mysignal = signal('Angel Mateo') // el signal se imprime coomo funcion ()

}
