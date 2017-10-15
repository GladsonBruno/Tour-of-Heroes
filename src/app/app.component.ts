import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

export class Campeao {
  Id: number;
  Nome: string;
  Titulo: string;
  Tipo: string;
  Regiao: string;
  Foto: string;
}

const CAMPEOES: Campeao [] = [
  {Id: 1, Nome: "Graves", Titulo: "O Foragido", Tipo: "Atirador", Regiao: "Bilgewater", Foto: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg"},
  {Id: 2, Nome: "Ashe", Titulo: "A Arqueira do Gelo", Tipo: "Atirador", Regiao: "Freljord", Foto: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg"},
  {Id: 3, Nome: "Annie", Titulo: "A Criança Sombria", Tipo: "Mago", Regiao: "Independente", Foto: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg"},
  {Id: 4, Nome: "Darius", Titulo: "A Mão de Noxus", Tipo: "Tanque", Regiao: "Noxus", Foto: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg"},
  {Id: 5, Nome: "Garen", Titulo: "O Poder de Demacia", Tipo: "Tanque", Regiao: "Demacia", Foto: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"},
  {Id: 6, Nome: "Jarvan IV", Titulo: "O Exemplo de Demacia", Tipo: "Tanque", Regiao: "Demacia", Foto: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg"},
  {Id: 7, Nome: "Poppy", Titulo: "Guardiã do Martelo", Tipo: "Tanque", Regiao: "Bandle City / Demacia", Foto: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg"},
  {Id: 8, Nome: "Twisted Fate", Titulo: "O Mestre das Cartas", Tipo: "Mago", Regiao: "Bilgewater", Foto: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg"},
  {Id: 9, Nome: "Volibear", Titulo: "O Rugido do Trovão", Tipo: "Tanque", Regiao: "Freljord", Foto: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg"},
  {Id: 10, Nome: "Braum", Titulo: "O Coração de Freljord", Tipo: "Tanque", Regiao: "Freljord", Foto: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg"}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: 'Tour of Heroes - League of Legends';
  campeoes = CAMPEOES;
  campeaoSelecionado: Campeao;


  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService){}

  public openModal(template: TemplateRef<any>, campeao:Campeao){
    this.campeaoSelecionado = campeao;
    this.modalRef = this.modalService.show(template);
  }

}
