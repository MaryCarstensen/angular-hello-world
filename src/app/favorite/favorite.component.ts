import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({ // component meta data
  selector: 'favorite', // custom tag to use on main html page i.e. app.component.html
  templateUrl: './favorite.component.html', //  unless template is small and then only here
  styleUrls: ['./favorite.component.css'], // style here set to red
  styles: [
    `
    .glyphicon { color: green; }
    `
  ], // this style is last and so it has precidence, styles are scoped in this component by using shadow dom
  encapsulation: ViewEncapsulation.Emulated // this is default so this line is not neccessary!!
})
export class FavoriteComponent {
  title = 'star gazing';
  @Input('isFavorite') isFavorite: boolean; // alias will keep contract of component stable if change of name of input property
  @Output('change') change = new EventEmitter(); // alias will keep the component of the API stable

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite});
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
