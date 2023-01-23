import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunixbotCommandsEditComponent } from './funixbot-commands-edit.component';

describe('FunixbotCommandsEditComponent', () => {
  let component: FunixbotCommandsEditComponent;
  let fixture: ComponentFixture<FunixbotCommandsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunixbotCommandsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunixbotCommandsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
