import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPersonalMeetingsComponent } from './my-personal-meetings.component';

describe('MyPersonalMeetingsComponent', () => {
  let component: MyPersonalMeetingsComponent;
  let fixture: ComponentFixture<MyPersonalMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPersonalMeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPersonalMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
