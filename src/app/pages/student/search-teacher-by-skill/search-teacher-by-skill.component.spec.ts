import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTeacherBySkillComponent } from './search-teacher-by-skill.component';

describe('SearchTeacherBySkillComponent', () => {
  let component: SearchTeacherBySkillComponent;
  let fixture: ComponentFixture<SearchTeacherBySkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTeacherBySkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTeacherBySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
