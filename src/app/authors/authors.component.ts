import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  template: `
    <h2>{{ authors.length + ' ' + title }}</h2>
    <ul>
      <li *ngFor="let author of authors">
      {{ author }}
      </li>
    </ul>`
})
export class AuthorsComponent {
  title = 'Authors';
  authors;
  number; // no lomger used, found a better way to do it

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.number = service.getNumber();
   }

}
