import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

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

  @Input() postObject!: Post;
  @Output() deleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  deletePost = (): void => {
    this.deleted.emit();
  }

}
