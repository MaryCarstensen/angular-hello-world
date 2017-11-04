import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) {
    http.get(this.url)
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
      console.log(response.json());
    });
  }
  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
    .subscribe(Response => {
      console.log(Response.json);
    });
    // this.http.put(this.url + '/' + post.id, JSON.stringify(post))
    // .subscribe(Response => {
    //   console.log(Response.json);
    // });
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
