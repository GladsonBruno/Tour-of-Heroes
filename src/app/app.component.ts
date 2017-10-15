import { Component } from '@angular/core';

export class Campeao {
  Id: number;
  Nome: string;
  Titulo: string;
  Tipo: string;
  Regiao: string;
}

const CAMPEOES: Campeao [] = [
  {Id: 1, Nome: "Graves", Titulo: "O Foragido", Tipo: "Atirador", Regiao: "Bilgewater"},
  {Id: 2, Nome: "Ashe", Titulo: "A Arqueira do Gelo", Tipo: "Atirador", Regiao: "Freljord"},
  {Id: 3, Nome: "Annie", Titulo: "A Criança Sombria", Tipo: "Mago", Regiao: "Independente"},
  {Id: 4, Nome: "Darius", Titulo: "A Mão de Noxus", Tipo: "Tanque", Regiao: "Noxus"},
  {Id: 5, Nome: "Garen", Titulo: "O Poder de Demacia", Tipo: "Tanque", Regiao: "Demacia"},
  {Id: 6, Nome: "Jarvan IV", Titulo: "O Exemplo de Demacia", Tipo: "Tanque", Regiao: "Demacia"},
  {Id: 7, Nome: "Poppy", Titulo: "Guardiã do Martelo", Tipo: "Tanque", Regiao: "Bandle City / Demacia"},
  {Id: 8, Nome: "Twisted Fate", Titulo: "O Mestre das Cartas", Tipo: "Mago", Regiao: "Bilgewater"},
  {Id: 9, Nome: "Volibear", Titulo: "O Rugido do Trovão", Tipo: "Tanque", Regiao: "Freljord"},
  {Id: 10, Nome: "Braum", Titulo: "O Coração de Freljord", Tipo: "Tanque", Regiao: "Freljord"}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: 'Tour of Heroes - League of Legends';
  campeoes = CAMPEOES;

}
