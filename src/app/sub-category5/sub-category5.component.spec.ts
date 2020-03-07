import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategory5Component } from './sub-category5.component';

describe('SubCategory5Component', () => {
  let component: SubCategory5Component;
  let fixture: ComponentFixture<SubCategory5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategory5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategory5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
