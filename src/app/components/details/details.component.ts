import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ComponentCanDeactivate } from '../../guards/pendingChanges.guard';
import { HostListener } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit, ComponentCanDeactivate {
  post: Post = {
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

  postDetailsForm: FormGroup = this.formBuilder.group({
    caption: [new FormControl(this.post.caption), Validators.required],
  });

  postId = this.route.snapshot.paramMap.get('id') || '';
  postModified = false;

  constructor(
    private postsService: PostService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    this.getPosts();

    this.postDetailsForm.valueChanges.subscribe(selectedValue  => {
      this.postModified = true;
    })
  }

  async getPosts() {
    await this.postsService
      .getPostDetails(this.postId)
      .subscribe((res: any) => {
        this.post = res.result;
        this.postDetailsForm.setValue({
          caption: res.result.caption,
        });
        this.postModified = false;
      });
  }

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    return !this.postModified;
  }

  onSubmit() {
    this.postModified = false;
    alert("Data saved");
  }
}
