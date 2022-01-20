import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMeetingsTeacherComponent } from './all-meetings-teacher.component';

describe('AllMeetingsTeacherComponent', () => {
  let component: AllMeetingsTeacherComponent;
  let fixture: ComponentFixture<AllMeetingsTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMeetingsTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMeetingsTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
