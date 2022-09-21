import {
  TestBed,
  async,
  ComponentFixture,
  inject,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { routes } from './app-routing.module';
import { PostsComponent } from './stillSimpleTests/posts/posts.component';
import { PostComponent } from './simpleTests/postComponent/postComponent';
import { UsersComponent } from './stillSimpleTests/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddpostComponent } from './stillSimpleTests/addpost/addpost.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
      ],
      declarations: [
        AppComponent,
        PostComponent,
        PostsComponent,
        UsersComponent,
        NotFoundComponent,
        AddpostComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jasmine'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('jasmine');
  });

  it('should route to user component', fakeAsync(() => {
    const router = TestBed.get(Router);
    const spyRef = spyOn(router, 'navigate');
    const link = fixture.debugElement.query(By.css('.userLink'));
    const htmlLink: HTMLElement = link.nativeElement;
    // htmlLink.click()
    // link.triggerEventHandler('click',null)
    // htmlLink.dispatchEvent(new Event('click'));
    // fixture.detectChanges();
    // tick();
    // expect(spyRef).toHaveBeenCalled();
    expect(htmlLink.getAttribute('href')).toContain('users');
  }));
});
