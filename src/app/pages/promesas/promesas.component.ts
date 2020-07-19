import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });
    /*const promesa = new Promise( (resolve, reject) => {
      if (false) {
        resolve('Hola Mundo!');
      } else {
        reject('Algo salió mal!');
      }
    });

    promesa.then( (msg) => {
      console.log(msg);
    })
    .catch(err => console.log('Error en mi promesa. ', err));

    console.log('Fin del init.');*/
  }

  getUsuarios(): Promise<Response> {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
      .then( res => res.json())
      .then( body => resolve(body.data));
    });
  }

}
