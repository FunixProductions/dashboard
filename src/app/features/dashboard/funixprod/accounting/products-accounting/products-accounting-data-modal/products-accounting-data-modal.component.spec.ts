import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsAccountingDataModalComponent} from './products-accounting-data-modal.component';

describe('ProductsAccountingDataModalComponent', () => {
  let component: ProductsAccountingDataModalComponent;
  let fixture: ComponentFixture<ProductsAccountingDataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAccountingDataModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsAccountingDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
