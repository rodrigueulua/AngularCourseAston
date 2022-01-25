import { Component, Input, OnInit } from '@angular/core';
import { AwBlogArticleModel } from '../models/aw-blog-article.models';

@Component({
  selector: 'aw-blog-article',
  templateUrl: './aw-blog-article.component.html',
  styleUrls: ['./aw-blog-article.component.scss']
})
export class AwBlogArticleComponent implements OnInit {

  @Input() article!: AwBlogArticleModel;
  @Input() display: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.display = !this.display;
  }

  open(){
    this.display = true;
  }

  close(){
    this.display = false;
  }


}
