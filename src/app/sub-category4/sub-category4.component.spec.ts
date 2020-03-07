import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategory4Component } from './sub-category4.component';

describe('SubCategory4Component', () => {
  let component: SubCategory4Component;
  let fixture: ComponentFixture<SubCategory4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategory4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategory4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
