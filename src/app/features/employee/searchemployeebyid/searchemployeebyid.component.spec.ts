import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmployeeByIdComponent } from './searchemployeebyid.component';

describe('SearchemployeebyidComponent', () => {
  let component: SearchEmployeeByIdComponent;
  let fixture: ComponentFixture<SearchEmployeeByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchEmployeeByIdComponent]
    });
    fixture = TestBed.createComponent(SearchEmployeeByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
