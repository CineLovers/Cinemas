System.register(['angular2/core', './carousel.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, carousel_component_1;
    var Favori, AppComponent, FAVORIES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            }],
        execute: function() {
            Favori = (function () {
                function Favori() {
                }
                return Favori;
            }());
            exports_1("Favori", Favori);
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'your Favories';
                    this.favories = FAVORIES;
                }
                AppComponent.prototype.onSelect = function (favori) { this.selectedFavori = favori; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <h1><div class=\"title\">CINELOVERS</div></h1>\n    <div class=\"wrapper\">\n          <css-carousel></css-carousel>\n          </div>\n\n     <ul class=\"favories\">\n      <li *ngFor=\"#favori of favories\"\n        [class.selected]=\"favori === selectedFavori\"\n        (click)=\"onSelect(favori)\">\n\n        <span class=\"badge\">{{favori.id}}</span> {{favori.name}}\n\n        </li>\n    </ul>\n    <div *ngIf=\"selectedFavori\">\n\n\n <details>test</details>\n\n </div>\n    ",
                        styles: ["\n\n   .title{\n   text-align: center;\n   }\n    .wrapper{\n      width: 60%;\n      margin: 60px auto;\n      }\n      .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .favories {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .favories li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .favories li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .favories li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .favories .text {\n      position: relative;\n      top: -3px;\n    }\n    .favories .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n      }\n  "],
                        directives: [carousel_component_1.CSSCarouselComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            FAVORIES = [
                { "id": 11, "name": "Star wars 1", "synopsis": "Le star Wars de 2001", "url": "images/StarWars1.jpg", "urlV": "http://www.allocine.fr/_video/iblogvision.aspx?cmedia=19259278" },
                { "id": 12, "name": "Star wars 2", "synopsis": "Test", "url": "images/StarWars2.jpg" },
                { "id": 13, "name": "Star wars 3", "synopsis": "Test", "url": "images/StarWars3.jpg" },
                { "id": 14, "name": "Star wars 4", "synopsis": "Test", "url": "images/StarWars4.jpg" },
                { "id": 15, "name": "Star wars 5", "synopsis": "Test", "url": "images/StarWars5.jpg" },
                { "id": 16, "name": "Star wars 6", "synopsis": "Test", "url": "images/StarWars6.jpg" },
                { "id": 17, "name": "Star Wars 7", "synopsis": "Test", "url": "images/StarWars7.jpg" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map