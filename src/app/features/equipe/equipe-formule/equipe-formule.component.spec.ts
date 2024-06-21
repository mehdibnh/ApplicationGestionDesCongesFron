import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeFormuleComponent } from './equipe-formule.component';

describe('EquipeFormuleComponent', () => {
  let component: EquipeFormuleComponent;
  let fixture: ComponentFixture<EquipeFormuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipeFormuleComponent]
    });
    fixture = TestBed.createComponent(EquipeFormuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
