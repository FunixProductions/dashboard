import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SessionRemoveModalComponent} from './session-remove-modal.component';

describe('SessionRemoveModalComponent', () => {
  let component: SessionRemoveModalComponent;
  let fixture: ComponentFixture<SessionRemoveModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionRemoveModalComponent]
    });
    fixture = TestBed.createComponent(SessionRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
