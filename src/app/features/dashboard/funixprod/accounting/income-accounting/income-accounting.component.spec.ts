import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IncomeAccountingComponent} from './income-accounting.component';

describe('IncomeAccountingComponent', () => {
  let component: IncomeAccountingComponent;
  let fixture: ComponentFixture<IncomeAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeAccountingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomeAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
