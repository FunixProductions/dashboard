import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FunixbotComponent} from './funixbot.component';

describe('FunixbotComponent', () => {
  let component: FunixbotComponent;
  let fixture: ComponentFixture<FunixbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunixbotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunixbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
