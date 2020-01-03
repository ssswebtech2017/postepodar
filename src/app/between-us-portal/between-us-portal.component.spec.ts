import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenUsPortalComponent } from './between-us-portal.component';

describe('BetweenUsPortalComponent', () => {
  let component: BetweenUsPortalComponent;
  let fixture: ComponentFixture<BetweenUsPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetweenUsPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetweenUsPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
