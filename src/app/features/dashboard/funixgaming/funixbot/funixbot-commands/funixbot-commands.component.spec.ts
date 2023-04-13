import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FunixbotCommandsComponent} from './funixbot-commands.component';

describe('FunixbotCommandsComponent', () => {
  let component: FunixbotCommandsComponent;
  let fixture: ComponentFixture<FunixbotCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunixbotCommandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunixbotCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
