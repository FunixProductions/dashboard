import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FunixbotUserExpRemoveModalComponent} from './funixbot-user-exp-remove-modal.component';

describe('FunixbotUserExpRemoveModalComponent', () => {
  let component: FunixbotUserExpRemoveModalComponent;
  let fixture: ComponentFixture<FunixbotUserExpRemoveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunixbotUserExpRemoveModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunixbotUserExpRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
