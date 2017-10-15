import { Component } from '@angular/core';

export class Hero {
  Id: number;
  Nome: string;
}

const Herois : Hero [] = [
  {Id: 1, Nome: "Graves"},
  {Id: 2, Nome: "Ashe"},
  {Id: 3, Nome:}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: 'Tour of Heroes - League of Legends';
  heroi: Hero = {
    Id: 1,
    Nome: 'Jean Grey'
  }

}
