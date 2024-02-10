import { Component, ElementRef, QueryList, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [WelcomeComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  @ViewChild('mySvg') nameSvg: ElementRef|undefined;
  tl : gsap.core.Timeline;


  constructor() {
    this.tl= gsap.timeline({
      defaults: {
        ease: 'power4.out',
        duration: 1.7
      }
    })
  }


  ngAfterViewInit() {
    if(this.nameSvg){
      const gElement = this.nameSvg.nativeElement.querySelectorAll('.letter');
    }
  }
}