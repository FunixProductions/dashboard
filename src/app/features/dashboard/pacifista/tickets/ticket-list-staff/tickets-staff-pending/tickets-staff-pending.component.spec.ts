import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TicketsStaffPendingComponent} from './tickets-staff-pending.component';

describe('TicketsStaffPendingComponent', () => {
  let component: TicketsStaffPendingComponent;
  let fixture: ComponentFixture<TicketsStaffPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsStaffPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsStaffPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
