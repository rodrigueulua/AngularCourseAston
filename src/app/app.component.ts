import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AwCarrouselImgModel } from './components/carrousel/aw-carrousel-img.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-widgets';

  slides: AwCarrouselImgModel[]=[
    new AwCarrouselImgModel(
      'Titre 1',
      'Description 1',
      'http://unsplash.it/1000/1000?random/city'
    ),

    new AwCarrouselImgModel(
      'Titre 1',
      'Description 1',
      'http://unsplash.it/1000/1000?random/country'
    ),

    new AwCarrouselImgModel(
      'Titre 1',
      'Description 1',
      'http://unsplash.it/1000/1000?random'
    )
    ]

  @ViewChild('pageTitle')
  titleRef!: ElementRef;

  constructor(){

  }
  
  ngAfterViewInit(): void {
    console.log(this.titleRef.nativeElement.textContent);
  }
}
