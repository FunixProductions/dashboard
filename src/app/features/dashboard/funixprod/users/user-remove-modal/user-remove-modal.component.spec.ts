import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRemoveModalComponent } from './user-remove-modal.component';

describe('UserRemoveModalComponent', () => {
  let component: UserRemoveModalComponent;
  let fixture: ComponentFixture<UserRemoveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRemoveModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
