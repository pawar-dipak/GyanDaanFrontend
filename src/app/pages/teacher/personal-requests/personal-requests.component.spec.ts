import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRequestsComponent } from './personal-requests.component';

describe('PersonalRequestsComponent', () => {
  let component: PersonalRequestsComponent;
  let fixture: ComponentFixture<PersonalRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
