import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/simpleTests/postComponent/postComponent';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.less']
})
export class AddpostComponent implements OnInit {
  @Output() addPost = new EventEmitter<Post>();
  addForm: FormGroup;
  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      body: ''
    });
  }

  formSubmit() {
    this.addForm.valid
      ? (this.addPost.emit({ ...this.addForm.value, userId: 1 }),
        this.addForm.reset())
      : null;
  }
}
