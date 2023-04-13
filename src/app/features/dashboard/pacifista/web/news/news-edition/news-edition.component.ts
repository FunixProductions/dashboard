import {AfterViewInit, Component} from '@angular/core';
import PacifistaNewsDTO from "../../../../../../services/pacifista-api/web/news/dtos/PacifistaNewsDTO";
import {ActivatedRoute} from "@angular/router";
import PacifistaNewsService from "../../../../../../services/pacifista-api/web/news/services/PacifistaNewsService";

@Component({
  selector: 'app-news-edition',
  templateUrl: './news-edition.component.html',
  styleUrls: ['./news-edition.component.css']
})
export class NewsEditionComponent implements AfterViewInit {

  news: PacifistaNewsDTO = new PacifistaNewsDTO();

  constructor(private route: ActivatedRoute,
              private newsService: PacifistaNewsService) {
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
      this.newsService.patch(this.news).subscribe();
    } else {
      this.newsService.create(this.news).subscribe();
    }
  }


}
