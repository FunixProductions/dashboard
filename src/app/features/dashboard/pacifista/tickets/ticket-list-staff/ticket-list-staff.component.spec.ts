import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TicketListStaffComponent} from './ticket-list-staff.component';

describe('TicketListStaffComponent', () => {
  let component: TicketListStaffComponent;
  let fixture: ComponentFixture<TicketListStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketListStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketListStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
