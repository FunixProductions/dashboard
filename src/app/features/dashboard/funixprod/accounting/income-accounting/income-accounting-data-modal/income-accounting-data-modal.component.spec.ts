import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IncomeAccountingDataModalComponent} from './income-accounting-data-modal.component';

describe('IncomeAccountingDataModalComponent', () => {
  let component: IncomeAccountingDataModalComponent;
  let fixture: ComponentFixture<IncomeAccountingDataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeAccountingDataModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomeAccountingDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
