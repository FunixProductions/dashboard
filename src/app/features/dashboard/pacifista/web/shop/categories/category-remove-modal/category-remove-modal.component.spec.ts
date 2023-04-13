import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryRemoveModalComponent} from './category-remove-modal.component';

describe('CategoryRemoveModalComponent', () => {
  let component: CategoryRemoveModalComponent;
  let fixture: ComponentFixture<CategoryRemoveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryRemoveModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
