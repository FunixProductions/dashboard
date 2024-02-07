import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountingDeleteModalComponent} from './accounting-delete-modal.component';

describe('AccountingDeleteModalComponent', () => {
  let component: AccountingDeleteModalComponent;
  let fixture: ComponentFixture<AccountingDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountingDeleteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountingDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
