import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMeetingsComponent } from './common-meetings.component';

describe('CommonMeetingsComponent', () => {
  let component: CommonMeetingsComponent;
  let fixture: ComponentFixture<CommonMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonMeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
