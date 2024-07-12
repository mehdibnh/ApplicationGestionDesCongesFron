import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationFormComponent } from './reclamationform.component';

describe('ReclamationformComponent', () => {
  let component: ReclamationFormComponent;
  let fixture: ComponentFixture<ReclamationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamationFormComponent]
    });
    fixture = TestBed.createComponent(ReclamationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
