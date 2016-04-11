import {Component} from 'angular2/core';
export class Favori {
  id: number;
  name: string;
}
@Component({
  selector: 'favori',
  template:`
    <h1>{{title}}</h1>
    <h2>Here your favori</h2>
    <ul class="favories">
      <li *ngFor="#favori of favories"
        [class.selected]="favori === selectedFavori"
        (click)="onSelect(favori)">
        <span class="badge">{{favori.id}}</span> {{favori.name}}
      </li>
    </ul>
    <div *ngIf="selectedFavori">
      <h2>{{selectedFavori.name}} details!</h2>
      <div><label>id: </label>{{selectedFavori.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedFavori.name" placeholder="name"/>
      </div>
    </div>
  `,
  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .favories {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .favories li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .favories li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .favories li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .favories .text {
      position: relative;
      top: -3px;
    }
    .favories .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'your Favories';
  favories = FAVORIES;
  selectedFavori: Favori;
  onSelect(favori: Favori) { this.selectedFavori = favori; }
}
var FAVORIES: Favori[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];
