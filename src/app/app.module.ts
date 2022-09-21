import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { PostComponent } from './simpleTests/postComponent/postComponent';
import { PostsComponent } from './stillSimpleTests/posts/posts.component';
import { UsersComponent } from './stillSimpleTests/users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddpostComponent } from './stillSimpleTests/addpost/addpost.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    UsersComponent,
    NotFoundComponent,
    AddpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
