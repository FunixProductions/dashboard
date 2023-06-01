import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserLogoutModalComponent} from './user-logout-modal.component';

describe('UserLogoutModalComponent', () => {
  let component: UserLogoutModalComponent;
  let fixture: ComponentFixture<UserLogoutModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLogoutModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLogoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
