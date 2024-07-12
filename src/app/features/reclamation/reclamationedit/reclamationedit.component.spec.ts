import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationEditComponent } from './reclamationedit.component';

describe('ReclamationeditComponent', () => {
  let component: ReclamationEditComponent;
  let fixture: ComponentFixture<ReclamationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamationEditComponent]
    });
    fixture = TestBed.createComponent(ReclamationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
