import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FunixgamingComponent} from './funixgaming.component';

describe('FunixgamingComponent', () => {
  let component: FunixgamingComponent;
  let fixture: ComponentFixture<FunixgamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunixgamingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunixgamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
