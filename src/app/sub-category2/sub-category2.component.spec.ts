import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategory2Component } from './sub-category2.component';

describe('SubCategory2Component', () => {
  let component: SubCategory2Component;
  let fixture: ComponentFixture<SubCategory2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategory2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
