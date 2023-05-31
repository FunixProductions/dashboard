import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CaptureAuthComponent} from './capture-auth.component';

describe('CaptureAuthComponent', () => {
  let component: CaptureAuthComponent;
  let fixture: ComponentFixture<CaptureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptureAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaptureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
