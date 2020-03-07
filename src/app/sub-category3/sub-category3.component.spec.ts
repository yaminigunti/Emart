import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategory3Component } from './sub-category3.component';

describe('SubCategory3Component', () => {
  let component: SubCategory3Component;
  let fixture: ComponentFixture<SubCategory3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategory3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategory3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
