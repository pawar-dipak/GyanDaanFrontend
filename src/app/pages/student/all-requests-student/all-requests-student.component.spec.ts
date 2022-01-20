import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRequestsStudentComponent } from './all-requests-student.component';

describe('AllRequestsStudentComponent', () => {
  let component: AllRequestsStudentComponent;
  let fixture: ComponentFixture<AllRequestsStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRequestsStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRequestsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
