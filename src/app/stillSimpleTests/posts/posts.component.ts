import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/_services/post.service';
import { Post } from 'src/app/simpleTests/postComponent/postComponent';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
  posts: Array<Post>;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((posts: Array<Post>) => {
      this.posts = posts.map(post => {
        return {
          ...post,
          title: post.title.substr(0, 15),
          body: post.body.substr(0, 50),
          totalLikes: ~~(Math.random() * 10)
        };
      });
    });
  }

  delete(e) {
    this.postService.deletePost(e).subscribe(() => {
      this.posts.splice(this.posts.findIndex(post => post.id == e), 1);
    });
  }

  addPost(e) {
    this.postService.addPost(e).subscribe((post: Post) => {
      this.posts.unshift({
        title: post.title.substr(0, 15),
        body: post.body.substr(0, 50),
        totalLikes: ~~(Math.random() * 10),
        id: post.id,
        userId: post.userId,
        myLike: false
      });
    });
  }
}
