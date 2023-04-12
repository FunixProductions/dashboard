import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FunixbotUserExpComponent} from './funixbot-user-exp.component';

describe('FunixbotUserExpComponent', () => {
  let component: FunixbotUserExpComponent;
  let fixture: ComponentFixture<FunixbotUserExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunixbotUserExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunixbotUserExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
