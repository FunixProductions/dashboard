import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacifistaComponent } from './pacifista.component';

describe('PacifistaComponent', () => {
  let component: PacifistaComponent;
  let fixture: ComponentFixture<PacifistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacifistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacifistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
