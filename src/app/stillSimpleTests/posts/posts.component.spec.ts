import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { PostComponent } from 'src/app/simpleTests/postComponent/postComponent';
import { AddpostComponent } from '../addpost/addpost.component';
import { PostService } from 'src/app/_services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  const mockService: Partial<PostService> = {
    getPosts() {
      return of([{ title: 'Sample', body: 'test', id: 1, userId: 1 }]);
    },
    addPost(post) {
      return of([{ ...post, id: 2 }]);
    },
    deletePost(id) {
      return of(id);
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [PostsComponent, PostComponent, AddpostComponent],
      providers: [{ provide: PostService, useValue: mockService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*ng for ng if custom directrives, structural derectives and attribute derectives
  structural directives -> simply check the data
  attribute directives -> check for native element attributes
  custom directives -> similar approcah*/
  it('should contain posts for display', fakeAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    tick();
    expect(component.posts.length).toEqual(1);
  }));

  it('should add post', () => {
    const service = TestBed.get(PostService);
    // either leave as such since mock is provided or
    const spyRef = spyOn(service, 'addPost').and.callThrough();
    /* fake call
      let spyRef = spyOn(service, 'addPost').and.callFake(post => {
        return of([{ ...post, id: 2 }]);
      });
      fakereturn does not have hold of passed object
      let spyRef=spyOn(service,'addPost').and.returnValue()*/
    component.addPost({ title: 'Sample Title', boby: 'some text' });
    fixture.detectChanges();
    expect(spyRef).toHaveBeenCalled();
  });

  it('should delete post', () => {
    const service = TestBed.get(PostService);
    const spyRef = spyOn(service, 'deletePost').and.returnValue(of(null));
    component.delete(1);
    fixture.detectChanges();
    expect(spyRef).toHaveBeenCalledWith(1);
  });
});
