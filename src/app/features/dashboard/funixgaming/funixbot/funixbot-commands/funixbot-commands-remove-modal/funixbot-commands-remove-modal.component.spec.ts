import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FunixbotCommandsRemoveModalComponent} from './funixbot-commands-remove-modal.component';

describe('FunixbotCommandsRemoveModalComponent', () => {
  let component: FunixbotCommandsRemoveModalComponent;
  let fixture: ComponentFixture<FunixbotCommandsRemoveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunixbotCommandsRemoveModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunixbotCommandsRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
