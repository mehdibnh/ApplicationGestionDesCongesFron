import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchemployeebynomComponent } from './searchemployeebynom.component';

describe('SearchemployeebynomComponent', () => {
  let component: SearchemployeebynomComponent;
  let fixture: ComponentFixture<SearchemployeebynomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchemployeebynomComponent]
    });
    fixture = TestBed.createComponent(SearchemployeebynomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
