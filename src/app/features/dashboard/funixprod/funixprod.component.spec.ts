import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunixprodComponent } from './funixprod.component';

describe('FunixprodComponent', () => {
  let component: FunixprodComponent;
  let fixture: ComponentFixture<FunixprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunixprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunixprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
