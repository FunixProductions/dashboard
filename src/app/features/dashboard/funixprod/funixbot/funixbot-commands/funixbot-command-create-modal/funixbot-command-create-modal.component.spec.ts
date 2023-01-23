import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunixbotCommandCreateModalComponent } from './funixbot-command-create-modal.component';

describe('FunixCommandCreateModalComponent', () => {
  let component: FunixbotCommandCreateModalComponent;
  let fixture: ComponentFixture<FunixbotCommandCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunixbotCommandCreateModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunixbotCommandCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
