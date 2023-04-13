import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsRemoveModalComponent} from './news-remove-modal.component';

describe('NewsRemoveModalComponent', () => {
  let component: NewsRemoveModalComponent;
  let fixture: ComponentFixture<NewsRemoveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsRemoveModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
