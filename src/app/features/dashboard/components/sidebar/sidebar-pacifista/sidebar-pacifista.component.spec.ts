import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPacifistaComponent } from './sidebar-pacifista.component';

describe('SidebarPacifistaComponent', () => {
  let component: SidebarPacifistaComponent;
  let fixture: ComponentFixture<SidebarPacifistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarPacifistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarPacifistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
