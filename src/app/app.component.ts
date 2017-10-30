import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    title: 'Title',
    isFavorite: true
  };
  courses = [
    { id: 1, name: 'course1 '},
    { id: 2, name: 'course2 '},
    { id: 3, name: 'course3 '},
  ];
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  };
  viewMode = 'other';
  canSave = false;
  // using and interface to state type and enable intellisense (see favorite.component.ts)
  onFavoriteChanged(eventArgs: { newValue: FavoriteChangedEventArgs }) {
    console.log('yeah', eventArgs);
  }

  onAdd() {
    this.courses.push({ id: 4, name: 'course4'});
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'UPDATED';
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'DBcourse1 '},
      { id: 2, name: 'DBcourse2 '},
      { id: 3, name: 'DBcourse3 '},
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  
}
