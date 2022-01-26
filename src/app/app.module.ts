import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AwTagsModule } from './lib/aw-tags/aw-tags.module';
import { AwBlogComponent } from './components/aw-blog/aw-blog.component';
import { AwBlogFormComponent } from './components/aw-blog-form/aw-blog-form.component';
import { FormsModule } from '@angular/forms';
import { AwBlogArticleComponent } from './components/aw-blog-article/aw-blog-article.component';
import { CardComponent } from './components/card/card.component';
import { AwTabsModule } from './lib/aw-tabs/aw-tabs.module';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    AwBlogComponent,
    AwBlogFormComponent,
    AwBlogArticleComponent,
    CardComponent,
    CarrouselComponent
  ],
  imports: [
    BrowserModule,
    AwTagsModule,
    FormsModule,
    AwTabsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
