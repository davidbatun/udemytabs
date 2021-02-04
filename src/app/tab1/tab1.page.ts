import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  ngOnInit(){
    console.log("Hola mundo");

    let numero = 10;
    //debugger; /**Cuando se regarga el navegador se detiene aquí */
    numero = 20;
    numero = numero + 10;
    numero = 0;

    console.log(numero);
  }

}
/*Sirve para controlar el html o todo lo que suceda en el tab 1, es decir, el tab1.page.html aquí se crean los metodos o funciones*/