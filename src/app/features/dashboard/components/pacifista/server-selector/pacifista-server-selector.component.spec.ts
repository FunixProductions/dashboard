import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PacifistaServerSelectorComponent} from './pacifista-server-selector.component';

describe('ServerSelectorComponent', () => {
  let component: PacifistaServerSelectorComponent;
  let fixture: ComponentFixture<PacifistaServerSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacifistaServerSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacifistaServerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
