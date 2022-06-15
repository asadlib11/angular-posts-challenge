import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import {PostService} from '../../services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postsService: PostService) { }

  async ngOnInit(): Promise<void> {
    this.getPosts();
  }

  getPosts() {
    this.postsService.getPosts().subscribe((res: any) => {
      console.log('response', res);
      this.posts = res.result;
    })
  }
}
