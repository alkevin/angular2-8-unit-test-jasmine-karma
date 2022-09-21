import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  totalLikes: number;
  myLike: boolean;
}

@Component({
  selector: 'app-post',
  templateUrl: './postComponent.html',
  styleUrls: ['./postComponent.less']
})
export class PostComponent {
  @Input() post: Partial<Post>;
  @Output() deleteMe = new EventEmitter<number>();

  like() {
    this.post.myLike = true;
    this.post.totalLikes++;
  }

  dislike() {
    this.post.myLike = false;
    if (this.post.totalLikes) {
      this.post.totalLikes--;
    }
  }
}
