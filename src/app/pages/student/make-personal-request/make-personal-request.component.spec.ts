import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePersonalRequestComponent } from './make-personal-request.component';

describe('MakePersonalRequestComponent', () => {
  let component: MakePersonalRequestComponent;
  let fixture: ComponentFixture<MakePersonalRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakePersonalRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePersonalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
