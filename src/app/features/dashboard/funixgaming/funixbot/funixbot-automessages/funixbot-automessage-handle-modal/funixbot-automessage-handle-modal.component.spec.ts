import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunixbotAutomessageHandleModalComponent } from './funixbot-automessage-handle-modal.component';

describe('FunixbotAutomessageHandleModalComponent', () => {
  let component: FunixbotAutomessageHandleModalComponent;
  let fixture: ComponentFixture<FunixbotAutomessageHandleModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunixbotAutomessageHandleModalComponent]
    });
    fixture = TestBed.createComponent(FunixbotAutomessageHandleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
