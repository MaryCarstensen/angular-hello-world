import { Component } from '@angular/core';

@Component({
    selector: 'title-case',
    template: `
        <input type="text" [(ngModel)]="title"/>
        <br>
        {{ title | titleCase }}
    `
})

export class TitleCaseComponent {
    title = '';
    newTitle = ' ';
    onKeyUp() {
        // $event.target.value
        this.newTitle = this.title;
    }
}
