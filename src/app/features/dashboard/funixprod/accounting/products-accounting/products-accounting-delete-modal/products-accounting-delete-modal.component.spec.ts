import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsAccountingDeleteModalComponent} from './products-accounting-delete-modal.component';

describe('ProductsAccountingDeleteModalComponent', () => {
  let component: ProductsAccountingDeleteModalComponent;
  let fixture: ComponentFixture<ProductsAccountingDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAccountingDeleteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsAccountingDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
