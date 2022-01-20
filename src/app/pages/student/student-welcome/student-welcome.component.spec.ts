import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWelcomeComponent } from './student-welcome.component';

describe('StudentWelcomeComponent', () => {
  let component: StudentWelcomeComponent;
  let fixture: ComponentFixture<StudentWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
