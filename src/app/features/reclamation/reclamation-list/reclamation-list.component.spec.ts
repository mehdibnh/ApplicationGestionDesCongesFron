import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationListComponent } from './reclamation-list.component';

describe('ReclamationListComponent', () => {
  let component: ReclamationListComponent;
  let fixture: ComponentFixture<ReclamationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamationListComponent]
    });
    fixture = TestBed.createComponent(ReclamationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
