import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongedemandeComponent } from './congedemande.component';

describe('CongedemandeComponent', () => {
  let component: CongedemandeComponent;
  let fixture: ComponentFixture<CongedemandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongedemandeComponent]
    });
    fixture = TestBed.createComponent(CongedemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
