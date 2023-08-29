import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunixbotAutomessagesComponent } from './funixbot-automessages.component';

describe('FunixbotAutomessagesComponent', () => {
  let component: FunixbotAutomessagesComponent;
  let fixture: ComponentFixture<FunixbotAutomessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunixbotAutomessagesComponent]
    });
    fixture = TestBed.createComponent(FunixbotAutomessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
