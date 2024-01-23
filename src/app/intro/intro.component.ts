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
  ngOnInit() {
    // Hier können Sie auf das g-Element zugreifen
    // const gElement = this.nameSvg?.nativeElement.querySelector('g');
    // this.tl.set(gElement, { autoAlpha: 0 });
  }

  ngAfterViewInit() {
    if(this.nameSvg){

      const gElement = this.nameSvg.nativeElement.querySelectorAll('.letter');
      for(let i = 0; i < gElement.length; i++){
        console.log(`Letter ${i} totalLength: ${gElement[i].getTotalLength()}`);
      }
      // gsap.to(gElement, { autoAlpha: 1 , duration:4});
      // gsap.to(gElement, {
      //   scale: 1.5,
      //   duration:4
      // });
      // gsap.from(gElement, {
      //   skewY:60,
      //   yPercent:100,
      //   stagger:0.05,
      //   skewX:60,
      //   duration:1
      // });
    }
  }
}