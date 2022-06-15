import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post = {
    _id: '',
    user: {
      counts: {
        followedBy: 0,
      },
      username: '',
      profilePicUrl: '',
    },
    counts: {
      likes: 0,
      comments: 0,
    },
    postedAt: '',
    kind: '',
    shortcode: '',
    caption: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
