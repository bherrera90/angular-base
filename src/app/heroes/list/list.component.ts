import { Component } from '@angular/core';


@Component({
  selector: 'app-heroe-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public heroNames:string []= ['Spideman','HUlk','Capitan America','Iroman','Thor'];

deleteHero?: string;


  removeLastHero(): void {
    // Lógica para borrar el último héroe
    if (this.heroNames.length > 0) {
      this.deleteHero = this.heroNames.pop();
      console.log(this.deleteHero);// Asigna el héroe borrado a deleteHero
    } else {
      this.deleteHero = '';
      console.log(this.deleteHero); // No hay héroes para borrar
    }
}

}
