import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  showForm: boolean = false;

  myPosts: Post[] = [
    {
      title: "SchTuesday Innit",
      thought: "Today seems long",
    },
    {
      title: "Wahuhbouhl",
      thought: "I'm an accent master",
    },
    {
      title: "Paczki",
      thought: "It's fat tuesday",
    },
    {
      title: "Angular",
      thought: "Angular is cool",
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onDelete = (index: number): void => {
    this.myPosts.splice(index, 1)
  }
  onSubmit = (post: Post): void => {
    this.myPosts.unshift(post)
    this.toggleForm();
  }
  toggleForm = () => {
    this.showForm = !this.showForm;
  }
}
