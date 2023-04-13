import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryEditModalComponent} from './category-edit-modal.component';

describe('CategoryEditModalComponent', () => {
  let component: CategoryEditModalComponent;
  let fixture: ComponentFixture<CategoryEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
