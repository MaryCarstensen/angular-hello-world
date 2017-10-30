import { CoursesService } from './courses.service';

import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    //  <app-courses> new html component or element is referenced/defined by this decorator property
    //  angular will render this new component where we use it
    //  <div class="courses"> will be ".courses" 
    //  <div id="courses"> is "#courses"
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">
            {{ course }}
            </li>
        </ul>
        <button class="btn btn-orimary" [class.active]="isActive">Save</button>
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save1</button>
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>
        <input (keyup.enter)="onKeyUp1($event)" />
        <div>
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp2()" />
        </div>
        {{ course.courseTitle | uppercase }} <br/>
        {{ course.rating | number:'2.2-2' }} <br/>
        {{ course.students | number }} <br/>
        {{ course.price | currency:'CAD':true:'3.2-2' }} <br/>
        {{ course.releaseDate | date:'shortDate'}} <br/>
        {{ text | summary:12 }}
        `
        //  HTML markup rendered for this component by the template
        //  style binding for  background  color if flag is true then color is blue otherwise it is white
        //  pipe operators, date pipe class at https://angular.io/api/common/DatePipe
})
export class CoursesComponent {
    title = 'List of courses';
    courses;
    isActive = false; // if false then the target active class will be removed from the template in the component decorator
    email = 'me@example.com';
    course = {
        courseTitle: 'The Complete Angular Course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };
    // tslint:disable-next-line:max-line-length
    text = `
    SUMMARY of the text. This is a whole lot of text that will be shown .This is a whole lot of text that will be shown .This is a whole lot of text that will be shown .This is a whole lot of text that will be shown .This is a whole lot of text that will be shown .
    `;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    getTitle() {
        return this.title;
    }
    onSave($event) {
        $event.stopPropagation(); // this  stops the event  from bubbling up to the outerlying div

        console.log('button was clicked', $event);
    }
    onDivClicked() {
        console.log('Div was clicked');
    }
    onKeyUp1($event) {
        console.log($event.target.value);
    }
    onKeyUp2() { // use  of template variable
        console.log(this.email);
    }
}
