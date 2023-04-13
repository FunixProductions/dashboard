import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreationModalComponent } from './category-creation-modal.component';

describe('CategoryCreationModalComponent', () => {
  let component: CategoryCreationModalComponent;
  let fixture: ComponentFixture<CategoryCreationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCreationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCreationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
