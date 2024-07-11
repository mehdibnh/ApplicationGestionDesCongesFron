import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchemployeebypostComponent } from './searchemployeebypost.component';

describe('SearchemployeebypostComponent', () => {
  let component: SearchemployeebypostComponent;
  let fixture: ComponentFixture<SearchemployeebypostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchemployeebypostComponent]
    });
    fixture = TestBed.createComponent(SearchemployeebypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
