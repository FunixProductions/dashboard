import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleCreationModalComponent} from './article-creation-modal.component';

describe('ArticleCreationModalComponent', () => {
  let component: ArticleCreationModalComponent;
  let fixture: ComponentFixture<ArticleCreationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCreationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCreationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
