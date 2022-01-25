import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AwBlogArticleComponent } from '../aw-blog-article/aw-blog-article.component';
import { AwBlogArticleModel } from '../models/aw-blog-article.models';

@Component({
  selector: 'aw-blog',
  templateUrl: './aw-blog.component.html',
  styleUrls: ['./aw-blog.component.scss']
})
export class AwBlogComponent implements OnInit {

  @ViewChildren(AwBlogArticleComponent)
  articleList!: QueryList<AwBlogArticleComponent>;

  articles: AwBlogArticleModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  add(article: AwBlogArticleModel): void {
    let articleValue: AwBlogArticleModel = new AwBlogArticleModel(article.title, article.text);
    this.articles.push(articleValue);
  }

  OpenAll(): void {
    this.articleList.forEach(article => {
      article.open();
    });
  }

  closeAll(): void {
    this.articleList.forEach(article => {
      article.close();
    });
  }
}

