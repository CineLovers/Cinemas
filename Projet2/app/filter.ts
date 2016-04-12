import {Pipe} from "angular2/core";

@Pipe({
    name: "filter"
})
export class Filter{
    transform(value){
        return value.filter((favori)=>favori.genre == ('drama'));
    }
}