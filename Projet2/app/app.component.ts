import {Component} from 'angular2/core';
import {CSSCarouselComponent} from './carousel.component';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h1><div class="title">CINELOVERS</div></h1>
    <h2>
    <div class="wrapper">
          <css-carousel></css-carousel>
          </div>

    `,
  styles:[`

   .title{
   text-align: center;
   }
    .wrapper{
      width: 60%;
      margin: 60px auto;
  `],
  directives: [CSSCarouselComponent]
})
export class AppComponent {
}
