import { Component } from '@angular/core';

export class Hero {
  Id: number;
  Nome: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: 'Tour of Heroes';
  heroi: Hero = {
    Id: 1,
    Nome: 'Jean Grey'
  }

}
