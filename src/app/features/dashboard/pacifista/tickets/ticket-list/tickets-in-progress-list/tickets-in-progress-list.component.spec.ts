import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TicketsInProgressListComponent} from './tickets-in-progress-list.component';

describe('TicketsInProgressListComponent', () => {
  let component: TicketsInProgressListComponent;
  let fixture: ComponentFixture<TicketsInProgressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsInProgressListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsInProgressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
