import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGoalsComponent } from './student-goals.component';

describe('StudentGoalsComponent', () => {
  let component: StudentGoalsComponent;
  let fixture: ComponentFixture<StudentGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
