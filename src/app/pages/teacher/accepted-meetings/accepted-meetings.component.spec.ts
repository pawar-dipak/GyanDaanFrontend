import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedMeetingsComponent } from './accepted-meetings.component';

describe('AcceptedMeetingsComponent', () => {
  let component: AcceptedMeetingsComponent;
  let fixture: ComponentFixture<AcceptedMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedMeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
