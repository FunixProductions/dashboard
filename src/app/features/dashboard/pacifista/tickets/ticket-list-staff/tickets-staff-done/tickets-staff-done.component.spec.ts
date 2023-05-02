import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TicketsStaffDoneComponent} from './tickets-staff-done.component';

describe('TicketsStaffDoneComponent', () => {
  let component: TicketsStaffDoneComponent;
  let fixture: ComponentFixture<TicketsStaffDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsStaffDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsStaffDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
