import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsAccountingComponent} from './products-accounting.component';

describe('ProductsAccountingComponent', () => {
  let component: ProductsAccountingComponent;
  let fixture: ComponentFixture<ProductsAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAccountingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
