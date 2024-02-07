import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AccountingViewPageComponent} from './accounting-view-page.component';

describe('AccountingViewPageComponent', () => {
  let component: AccountingViewPageComponent;
  let fixture: ComponentFixture<AccountingViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountingViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountingViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
