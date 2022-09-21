import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostComponent } from './addpost.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

// Applicable for both suite(describe) and spec(it)
//Focus Test - prefix with f
//Skip test - prefix with x

describe('AddpostComponent', () => {
  let component: AddpostComponent;
  let fixture: ComponentFixture<AddpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [AddpostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //After standard boilerpate that is auto generated and with specified imports your tests go here..

  it('should create the form', () => {
    expect(component.addForm).toBeDefined();
  });

  it('should have form with expected fields', () => {
    expect(component.addForm.value).toEqual({ title: '', body: '' });
  });

  it('should check for validator error and pass', () => {
    component.addForm.get('title').patchValue('Test Value');
    expect(component.addForm.valid).toBeTruthy();
  });

  it('should check for validator error and fail', () => {
    expect(component.addForm.valid).toBeFalsy();
  });

  it('should check for error in exact form control', () => {
    expect(component.addForm.get('title').errors.required).toBeTruthy();
  });

  it('Should able to submit value', () => {
    // spyon method and event emitter
    let spyRef = spyOn(component.addPost, 'emit').and.callFake(() => {});
    component.addForm.get('title').patchValue('Test Value');
    let button = fixture.debugElement.query(By.css('.addPost'));
    let htmlButton: HTMLElement = button.nativeElement;
    htmlButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(spyRef).toHaveBeenCalledWith({
      title: 'Test Value',
      body: '',
      userId: 1
    });
  });
});
