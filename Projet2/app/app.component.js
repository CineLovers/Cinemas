System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Favori, AppComponent, FAVORIES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                        selector: 'favori',
                        template: "\n    <h1>{{title}}</h1>\n    <h2>Here your favori</h2>\n    <ul class=\"favories\">\n      <li *ngFor=\"#favori of favories\"\n        [class.selected]=\"favori === selectedFavori\"\n        (click)=\"onSelect(favori)\">\n        <span class=\"badge\">{{favori.id}}</span> {{favori.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedFavori\">\n      <h2>{{selectedFavori.name}} details!</h2>\n      <div><label>id: </label>{{selectedFavori.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedFavori.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  <div class='genre'> <h1>Genre :</h1></div> <div><ul id='genre'> <li><a href='#'><span>Drame</span></a> </li> <li><a href='#'><span>Fantastique</span></a> </li> <li><a href='#'><span>Humour</span></a> </li> </ul></div>",
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .favories {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .favories li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .favories li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .favories li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .favories .text {\n      position: relative;\n      top: -3px;\n    }\n .genre {display: inline-block;}\n #genre{list-style-type:none; display: inline-block;}\n    .favories .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            FAVORIES = [
                { "id": 11, "name": "Mr. Nice", "genre": "1" },
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
        }
    }
});
//# sourceMappingURL=app.component.js.map