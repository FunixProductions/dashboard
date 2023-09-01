import {AfterViewInit, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import NotificationsService from "../../../../../../services/NotificationService";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../../environments/environment";
import {PacifistaNewsDTO, PacifistaNewsService} from "@funixproductions/funixproductions-requests";

@Component({
  selector: 'app-news-edition',
  templateUrl: './news-edition.component.html',
  styleUrls: ['./news-edition.component.css']
})
export class NewsEditionComponent implements AfterViewInit {

  private readonly newsService: PacifistaNewsService;
  news: PacifistaNewsDTO = new PacifistaNewsDTO();

  constructor(private route: ActivatedRoute,
              private notificationService: NotificationsService,
              httpClient: HttpClient) {
    this.newsService = new PacifistaNewsService(httpClient, environment.production);
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      if (id && id !== 'new') {
        this.newsService.getById(id).subscribe({
          next: (news : PacifistaNewsDTO) => {
            this.news = news;
          }
        });
      }
    });
  }

  saveEntity(): void {
    if (this.news.id) {
      this.newsService.patch(this.news).subscribe({
        next: (news: PacifistaNewsDTO) => {
          this.news = news;
          this.notificationService.success('News ' + news.name + ' mise à jour.');
        },
        error: (error) => {
          this.notificationService.onErrorRequest(error);
        }
      });
    } else {
      this.newsService.create(this.news).subscribe({
        next: (news: PacifistaNewsDTO) => {
          this.news = news;
          this.notificationService.success('News ' + news.name + ' crée.');
        },
        error: (error) => {
          this.notificationService.onErrorRequest(error);
        }
      });
    }
  }

}
