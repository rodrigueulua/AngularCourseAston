import { Component, Input, OnInit } from '@angular/core';
import { AwCarrouselImgModel } from './aw-carrousel-img.model';
import { fadeIn, fadeOut, slideLeftIn, slideRightIn } from 'src/app/lib/aw-core/aw-animations';


@Component({
  selector: 'aw-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  animations:[
    fadeIn,
    fadeOut,
    slideLeftIn,
    slideRightIn
  ]
})
export class CarrouselComponent implements OnInit {

  @Input() images: AwCarrouselImgModel[] = [];

  currentPos: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  next():void{
    if (this.currentPos < this.images.length - 1){
      this.currentPos++;
    }
    else{
      this.currentPos = 0;
    }
  }

  prev():void{
    if (this.currentPos > 0){
      this.currentPos--;
    }
    else{
      this.currentPos = this.images.length - 1;
    }
  }

}
