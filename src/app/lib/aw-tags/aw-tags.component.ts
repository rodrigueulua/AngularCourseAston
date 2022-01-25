import { Component,Input, OnInit, Output } from '@angular/core';
import { fadeIn, fadeOut, slideLeftIn, slideRightIn } from '../aw-core/aw-animations';

@Component({
  selector: 'aw-tags',
  templateUrl: './aw-tags.component.html',
  styleUrls: ['./aw-tags.component.scss'],
  animations:[
    fadeIn,
    fadeOut,
    slideLeftIn,
    slideRightIn
  ]
})
export class AwTagsComponent implements OnInit {
  tags: string[] = [];
  @Input() max: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(evt: Event){
    const el: HTMLInputElement = evt.target as HTMLInputElement;
    if (el.value && !this.tags.includes(el.value)){
      this.tags.push(el.value);
      el.value = '';
    }
  }

  remove(index:number): void{
    this.tags.splice(index, 1);
  }

}
