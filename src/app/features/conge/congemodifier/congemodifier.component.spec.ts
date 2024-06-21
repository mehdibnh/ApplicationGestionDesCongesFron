import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongemodifierComponent } from './congemodifier.component';

describe('CongemodifierComponent', () => {
  let component: CongemodifierComponent;
  let fixture: ComponentFixture<CongemodifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongemodifierComponent]
    });
    fixture = TestBed.createComponent(CongemodifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
