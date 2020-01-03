import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmansDeskComponent } from './chairmans-desk.component';

describe('ChairmansDeskComponent', () => {
  let component: ChairmansDeskComponent;
  let fixture: ComponentFixture<ChairmansDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChairmansDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairmansDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
