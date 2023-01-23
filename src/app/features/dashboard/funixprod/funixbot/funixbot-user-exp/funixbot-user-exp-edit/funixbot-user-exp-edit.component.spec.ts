import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunixbotUserExpEditComponent } from './funixbot-user-exp-edit.component';

describe('FunixbotUserExpEditComponent', () => {
  let component: FunixbotUserExpEditComponent;
  let fixture: ComponentFixture<FunixbotUserExpEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunixbotUserExpEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunixbotUserExpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
