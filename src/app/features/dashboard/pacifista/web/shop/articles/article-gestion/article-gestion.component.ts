import {AfterViewInit, Component} from '@angular/core';
import PacifistaShopArticleDTO
  from "../../../../../../../services/pacifista-api/web/shop/articles/dtos/PacifistaShopArticleDTO";
import {ActivatedRoute} from "@angular/router";
import PacifistaShopArticleService
  from "../../../../../../../services/pacifista-api/web/shop/articles/services/PacifistaShopArticleService";
import PacifistaShopCategoryService
  from "../../../../../../../services/pacifista-api/web/shop/categories/services/PacifistaShopCategoryService";
import PacifistaShopCategoryDTO
  from "../../../../../../../services/pacifista-api/web/shop/categories/dtos/PacifistaShopCategoryDTO";
import {PageOption, Paginated} from "../../../../../../../services/core/dtos/paginated";
import {QueryBuilder, QueryParam} from "../../../../../../../services/core/components/query.builder";
import NotificationsService from "../../../../../../../services/core/services/NotificationsService";

@Component({
  selector: 'app-article-gestion',
  templateUrl: './article-gestion.component.html',
  styleUrls: ['./article-gestion.component.css']
})
export class ArticleGestionComponent implements AfterViewInit {

  article: PacifistaShopArticleDTO = new PacifistaShopArticleDTO();

  categorySearch: string = '';
  categoriesSearchResult: PacifistaShopCategoryDTO[] = [];

  pageOption: PageOption = new PageOption();

  constructor(private route: ActivatedRoute,
              private articleService: PacifistaShopArticleService,
              private categoryService: PacifistaShopCategoryService,
              private notificationService: NotificationsService) {
    this.pageOption.elemsPerPage = 5;
    this.pageOption.page = 0;
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      if (id && id !== 'new') {
        this.articleService.getById(id).subscribe({
          next: (article : PacifistaShopArticleDTO) => {
            this.article = article;
          }
        });
      }
    });

    this.searchCategory();
  }

  saveEntity(): void {
    if (this.article.id) {
      this.articleService.patch(this.article).subscribe({
        next: (article: PacifistaShopArticleDTO) => {
          this.article = article;
          this.notificationService.success('Article mis à jour.');
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      });
    } else {
      this.articleService.create(this.article).subscribe({
        next: (article: PacifistaShopArticleDTO) => {
          this.article = article;
          this.notificationService.success('Article crée.');
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      });
    }
  }

  searchCategory(): void {
    const queryBuilder: QueryBuilder = new QueryBuilder;
    const queryParam: QueryParam = new QueryParam();

    queryParam.key = 'name';
    queryParam.value = this.categorySearch;
    queryParam.type = QueryBuilder.like;
    queryBuilder.addParam(queryParam);

    this.categoryService.find(this.pageOption, queryBuilder).subscribe({
      next: (categories: Paginated<PacifistaShopCategoryDTO>) => {
        this.categoriesSearchResult = categories.content;
      },
      error: err => {
        this.notificationService.onErrorRequest(err);
      }
    });
  }

  selectCategory(category: PacifistaShopCategoryDTO): void {
    this.article.category = category;
  }

}
