import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcResponsiveComponent } from './barc-responsive.component';

describe('BarcResponsiveComponent', () => {
  let component: BarcResponsiveComponent;
  let fixture: ComponentFixture<BarcResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
