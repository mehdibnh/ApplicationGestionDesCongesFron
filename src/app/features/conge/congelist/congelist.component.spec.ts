import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongelistComponent } from './congelist.component';

describe('CongelistComponent', () => {
  let component: CongelistComponent;
  let fixture: ComponentFixture<CongelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongelistComponent]
    });
    fixture = TestBed.createComponent(CongelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
