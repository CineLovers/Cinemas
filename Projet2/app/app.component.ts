import {Component} from 'angular2/core';
import {CSSCarouselComponent} from './carousel.component';
import {Image} from './image.interface';
import {video} from './video.interface';
import {detailcomponent} from './app/detail.component';
export class Favori {
    id: number;
    name: string;
    synopsis: string;
    images: url;
    iframe: urlV;
}

@Component({
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>
    <h1><div class="title">CINELOVERS</div></h1>
    <div class="wrapper">
          <css-carousel></css-carousel>
          </div>

     <ul class="favories">
      <li *ngFor="#favori of favories"
        [class.selected]="favori === selectedFavori"
        (click)="onSelect(favori)">

        <span class="badge">{{favori.id}}</span> {{favori.name}}

        </li>
    </ul>
    <div *ngIf="selectedFavori">


 <details>test</details>

 </div>
    `,
    styles:[`

   .title{
   text-align: center;
   }
    .wrapper{
      width: 60%;
      margin: 60px auto;
      }
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
  `],
    directives: [CSSCarouselComponent]
})
export class AppComponent {
    title = 'your Favories';
    favories = FAVORIES;
    selectedFavori: Favori;
    onSelect(favori: Favori) { this.selectedFavori = favori; }
}
var FAVORIES: Favori[] = [
    { "id": 11, "name": "Star wars 1", "synopsis": "Le star Wars de 2001","url": "images/StarWars1.jpg", "urlV": "http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19259278" },
    { "id": 12, "name": "Star wars 2", "synopsis": "Test","url": "images/StarWars2.jpg" },
    { "id": 13, "name": "Star wars 3","synopsis": "Test","url": "images/StarWars3.jpg" },
    { "id": 14, "name": "Star wars 4","synopsis": "Test","url": "images/StarWars4.jpg" },
    { "id": 15, "name": "Star wars 5","synopsis": "Test","url": "images/StarWars5.jpg" },
    { "id": 16, "name": "Star wars 6","synopsis": "Test","url": "images/StarWars6.jpg" },
    { "id": 17, "name": "Star Wars 7","synopsis": "Test","url": "images/StarWars7.jpg" }
];