import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import gsap from 'gsap';
import { OverlayService } from '../../overlay.service';


@Component({
  selector: 'app-social-buttons',
  standalone: true,
  imports: [
    MatButton,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  templateUrl: './social-buttons.component.html',
  styleUrl: './social-buttons.component.scss'
})
export class SocialButtonsComponent {
  @ViewChild('socialButtons') socialButtons: ElementRef<HTMLDivElement> | undefined;
  tl: gsap.core.Timeline;
  firstTime: boolean = true;
  delay : number;

  
  constructor(overlayService: OverlayService) {
    this.firstTime= overlayService.firstTime;
    this.firstTime? this.delay = 5.9 : this.delay = 0;
    this.tl = gsap.timeline({
      defaults: {
        ease: 'rough',
        duration: 2,
        delay: this.delay
      }
    })
  };


  ngAfterViewInit() {
    if (this.socialButtons) {
      const container = this.socialButtons.nativeElement;
      const buttons = this.socialButtons.nativeElement.querySelectorAll('.social-btn');
      gsap.to(container, { autoAlpha: 1, delay: this.delay });
      this.tl.from(buttons, {
        autoAlpha: 0,
        scale: .5,
        yPercent: -200,
        skewX: 60,
        stagger: 0.2,
        duration: .5,
        rotation: 360, transformOrigin: "50% 50%"
      })
    }
  };
}




