import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonalMeetingComponent } from './create-personal-meeting.component';

describe('CreatePersonalMeetingComponent', () => {
  let component: CreatePersonalMeetingComponent;
  let fixture: ComponentFixture<CreatePersonalMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePersonalMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonalMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
