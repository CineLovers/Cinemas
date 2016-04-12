import {Component} from 'angular2/core';
import {Image} from './image.interface';
import {video} from './video.interface';

@Component({
    selector :'details',
    template :`
    <h2>movies details!</h2>
<div>
    <img src="{{selectedFavori.url}}" >
    </div>
    <div><label>id: </label>{{selectedFavori.id}}</div>
<div>
    <label>name: </label>{{selectedFavori.name}}
</div>
<div>
    <label>synopsis: </label>{{selectedFavori.synopsis}}
<iframe src="{{selectedFavori.urlV}}">
    </iframe>
    </div>`

    ,})

export class detailcomponent{

}