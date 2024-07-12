import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedReclamationListComponent } from './archived-reclamation-list.component';

describe('ArchivedReclamationListComponent', () => {
  let component: ArchivedReclamationListComponent;
  let fixture: ComponentFixture<ArchivedReclamationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivedReclamationListComponent]
    });
    fixture = TestBed.createComponent(ArchivedReclamationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
