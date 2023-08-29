import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunixbotAutomessageRemoveModalComponent } from './funixbot-automessage-remove-modal.component';

describe('FunixbotAutomessageRemoveModalComponent', () => {
  let component: FunixbotAutomessageRemoveModalComponent;
  let fixture: ComponentFixture<FunixbotAutomessageRemoveModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunixbotAutomessageRemoveModalComponent]
    });
    fixture = TestBed.createComponent(FunixbotAutomessageRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
