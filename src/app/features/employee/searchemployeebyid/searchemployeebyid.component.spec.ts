import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchemployeebyidComponent } from './searchemployeebyid.component';

describe('SearchemployeebyidComponent', () => {
  let component: SearchemployeebyidComponent;
  let fixture: ComponentFixture<SearchemployeebyidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchemployeebyidComponent]
    });
    fixture = TestBed.createComponent(SearchemployeebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
