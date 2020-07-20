import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcCardComponent } from './barc-card.component';

describe('BarcCardComponent', () => {
  let component: BarcCardComponent;
  let fixture: ComponentFixture<BarcCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarcCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
