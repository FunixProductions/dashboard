import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
  PacifistaServerType,
  PacifistaShopArticleDTO,
  PacifistaShopArticleService,
  PacifistaShopCategoryDTO,
  PacifistaShopCategoryService,
  PageOption,
  Paginated,
  QueryBuilder,
  QueryParam
} from "@funixproductions/funixproductions-requests";
import NotificationsService from "../../../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../../environments/environment";

@Component({
  selector: 'app-article-gestion',
  templateUrl: './article-gestion.component.html',
  styleUrls: ['./article-gestion.component.css']
})
export class ArticleGestionComponent implements AfterViewInit {

  private readonly articleService: PacifistaShopArticleService;
  private readonly categoryService: PacifistaShopCategoryService;

  article: PacifistaShopArticleDTO = new PacifistaShopArticleDTO();
  file?: File;

  categorySearch: string = '';
  categoriesSearchResult: PacifistaShopCategoryDTO[] = [];

  pageOption: PageOption = new PageOption();

  constructor(private route: ActivatedRoute,
              httpClient: HttpClient,
              private notificationService: NotificationsService) {
    this.articleService = new PacifistaShopArticleService(httpClient, environment.production);
    this.categoryService = new PacifistaShopCategoryService(httpClient, environment.production);
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
    if (!this.file) {
      this.notificationService.error('Veuillez ajouter un fichier.');
      return;
    }

    if (this.article.id) {
      this.articleService.fullUpdateFile(this.article, this.file).subscribe({
        next: (article: PacifistaShopArticleDTO) => {
          this.article = article;
          this.notificationService.success('Article mis à jour.');
        },
        error: err => {
          this.notificationService.onErrorRequest(err);
        }
      });
    } else {
      this.articleService.sendFile(this.article, this.file).subscribe({
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

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  selectServer(server?: PacifistaServerType): void {
    this.article.serverType = server;
  }

}
