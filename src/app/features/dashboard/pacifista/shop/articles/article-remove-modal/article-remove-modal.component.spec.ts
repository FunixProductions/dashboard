import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleRemoveModalComponent} from './article-remove-modal.component';

describe('ArticleRemoveModalComponent', () => {
  let component: ArticleRemoveModalComponent;
  let fixture: ComponentFixture<ArticleRemoveModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleRemoveModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleRemoveModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
