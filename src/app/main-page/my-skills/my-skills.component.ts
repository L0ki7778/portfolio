import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";




@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  @ViewChild('svgContainer') svgContainer: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('skillTitle') skillTitle: ElementRef<HTMLHeadElement> | undefined;
  @ViewChild('skillTextContainer') skillTextContainer:ElementRef<HTMLDivElement> | undefined;
  // tl: gsap.core.Timeline;

  constructor() {
    // this.tl = gsap.timeline({
    //   defaults: {
    //     ease: 'none',
    //     duration: 1,
        
    //   }
    // });
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    if (this.svgContainer&&this.skillTitle && this.skillTextContainer) {

      const container = this.svgContainer.nativeElement;
      const gridItems = container.querySelectorAll('.grid-item');
      const headline = this.skillTitle.nativeElement;
      const content = this.skillTextContainer.nativeElement;
      const contentElements = content.querySelectorAll('.skill-content');


      gsap.to(container, { autoAlpha: 1, duration:1 });
      gsap.set(gridItems, {         
        autoAlpha: 0,
        scale: 0.2,
        yPercent: 200,
        xPercent:-200,
        rotation: 360,
        transformOrigin: '50% 50%'
      });
      gsap.set(headline,{
        yPercent: -150,
        xPercent:-50
        });
      gsap.set(contentElements,{
        autoAlpha:0,
        yPercent: -100,
        xPercent:-150
      })

      gsap.to(contentElements,{
        scrollTrigger:{
          trigger:content,
          once:true,
          start:"bottom 80%",
          end:"bottom 79%",
          markers:true,
          toggleActions:"restart none none none"
        },

        autoAlpha: 1,
        yPercent: 0,
        xPercent:0,
        duration:1

      });

      gsap.to(headline, {
        scrollTrigger:{
          trigger:headline,
          start:"bottom 80%",
          end:"bottom 79%",
          markers:true,
          toggleActions:"restart none reverse none"
        },

        yPercent: 0,
        xPercent:0,
        duration:1

      });
      gsap.to(gridItems, { 
        scrollTrigger:{
          trigger:gridItems,
          once:true,
          start:"bottom 95%",
          end:"bottom 94%",
          markers:true,
          toggleActions:"restart none none none"
        },
        
        autoAlpha: 1,
        scale: 1,
        yPercent: 0,
        xPercent:0,
        duration:1,
        rotation: 360,
        transformOrigin: '50% 50%'
      });

      // this.tl.from(gridItems, {
      // })

    }
  }
}




