import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchemployeebynameandsurnameComponent } from './searchemployeebynameandsurname.component';

describe('SearchemployeebynameandsurnameComponent', () => {
  let component: SearchemployeebynameandsurnameComponent;
  let fixture: ComponentFixture<SearchemployeebynameandsurnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchemployeebynameandsurnameComponent]
    });
    fixture = TestBed.createComponent(SearchemployeebynameandsurnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
