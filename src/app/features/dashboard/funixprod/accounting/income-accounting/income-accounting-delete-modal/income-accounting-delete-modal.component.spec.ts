import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IncomeAccountingDeleteModalComponent} from './income-accounting-delete-modal.component';

describe('IncomeAccountingDeleteModalComponent', () => {
  let component: IncomeAccountingDeleteModalComponent;
  let fixture: ComponentFixture<IncomeAccountingDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeAccountingDeleteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomeAccountingDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
