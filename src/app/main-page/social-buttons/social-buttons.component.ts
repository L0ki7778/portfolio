import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import gsap from 'gsap';


@Component({
  selector: 'app-social-buttons',
  standalone: true,
  imports: [
    MatButton,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  templateUrl: './social-buttons.component.html',
  styleUrl: './social-buttons.component.scss'
})
export class SocialButtonsComponent {
  @ViewChild('socialButtons') socialButtons: ElementRef<HTMLDivElement> | undefined;
  tl: gsap.core.Timeline;

  constructor() {
    this.tl = gsap.timeline({
      defaults: {
        ease: 'rough',
        duration: 2,
        delay: 9
      }
    })
  };


  ngAfterViewInit() {
    if (this.socialButtons) {
      const container = this.socialButtons.nativeElement;
      const buttons = this.socialButtons.nativeElement.querySelectorAll('.social-btn');
      gsap.to(container, { autoAlpha: 1, delay: 9 });
      this.tl.from(buttons, {
        autoAlpha: 0,
        scale: .5,
        xPercent: 200,
        yPercent: -200,
        stagger: 0.1,
        duration: .5,
        rotation: 360, transformOrigin: "50% 50%"
      })



      // gsap.to(buttons, {  duration: 2 });
    }
  };


}




