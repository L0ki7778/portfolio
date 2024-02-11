import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ButtonComponent,TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  @ViewChild('skillTitle') skillTitle: ElementRef<HTMLHeadElement> | undefined;
  @ViewChild('svgContainer') svgContainer: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('boxedSkillTitle') boxedSkillTitle: ElementRef<HTMLHeadElement> | undefined;
  @ViewChild('skillTextContainer') skillTextContainer: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('usedSkills') usedSkills: ElementRef<HTMLDivElement> | undefined;
  isMobileView: boolean = false;

  constructor() {
    this.isMobileView = window.innerWidth <= 1024 && window.innerHeight >= 1200 || window.innerWidth < 1024;
    gsap.registerPlugin(ScrollTrigger);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobileView = window.innerWidth <= 1024 && window.innerHeight >= 1200 || window.innerWidth < 1024;
  };


  ngAfterViewInit() {
    setTimeout(() => {
      if (this.svgContainer && this.boxedSkillTitle) {
        const scrollTrigger = this.boxedSkillTitle.nativeElement;
        const container = this.svgContainer.nativeElement;
        gsap.to(container, { autoAlpha: 1, duration: 1 });
        this.setGsapItems(scrollTrigger, container);
      }

    }, 10000);
  };




  setGsapItems(scrollTrigger: HTMLElement, mobileScrollTrigger: HTMLElement) {
    this.setGsapGrid(scrollTrigger, mobileScrollTrigger);
    this.setGsapTopHeadline(scrollTrigger);
    this.setGsapBoxHeadline(scrollTrigger);
    this.setGsapBoxText(scrollTrigger);
    this.setGsapUsedSkills(scrollTrigger);
  };

  setGsapGrid(scrollTrigger: HTMLElement, mobileScrollTrigger: HTMLElement) {
    if (this.svgContainer) {
      const container = this.svgContainer.nativeElement;
      const gridItems = container.querySelectorAll('.grid-item');
      gsap.set(gridItems, {
        autoAlpha: 0,
        scale: 0.2,
        yPercent: -50,
        skewX: 25,
        skewY: 25,
        rotation: 180,
        transformOrigin: '50% 50%'
      });
      this.toGsapGrid(scrollTrigger, mobileScrollTrigger, gridItems)
    };
  };

  toGsapGrid(trigger: HTMLElement, mobileScrollTrigger: HTMLElement, item: NodeListOf<Element>) {
    if (this.isMobileView) {
      return this.mobileIconAnimation(mobileScrollTrigger, item);
    } else {
      gsap.to(item, {
        scrollTrigger: this.gridScrollTrigger(trigger),
        autoAlpha: 1,
        scale: 1,
        yPercent: 0,
        xPercent: 0,
        duration: 1,
        skewX: 0,
        skewY: 0,
        rotation: 0,
        transformOrigin: '50% 50%',
        stagger: {
          each: .1,
          from: "random",
          ease: "power1.in"
        }
      });
    };
  };


  gridScrollTrigger(trigger:HTMLElement){
    return{
      trigger: trigger,
      once: true,
      start: "top center+=400",
      end: "top center+=400",
      toggleActions: "restart none none none"
    }
  };


  mobileIconAnimation(trigger: HTMLElement, item: NodeListOf<Element>) {
    gsap.to(item, {
      scrollTrigger: this.mobileIconAnimationScrollTrigger(trigger),
      autoAlpha: 1,
      scale: 1,
      yPercent: 0,
      xPercent: 0,
      duration: 1,
      skewX: 0,
      skewY: 0,
      rotation: 0,
      transformOrigin: '50% 50%',
      stagger: {
        each: .1,
        from: "random",
        ease: "power1.in"
      }
    });
  };


  mobileIconAnimationScrollTrigger(trigger: HTMLElement) {
    return {
      trigger: trigger,
      once: true,
      start: "top bottom-=100",
      end: "top bottom-=100",
      toggleActions: "restart none none none"
    }
  };
  

  setGsapTopHeadline(scrollTrigger: HTMLElement) {
    if (this.skillTitle && !this.isMobileView) {
      const topHeadline = this.skillTitle.nativeElement;
      gsap.set(topHeadline, {
        scale: 1,
        autoAlpha: 1,
      });
      this.toGsapTopHeadline(scrollTrigger, topHeadline)
    }
  };


  toGsapTopHeadline(trigger: HTMLElement, item: HTMLElement) {
    gsap.to(item, {
      scrollTrigger: this.topHeadlineScrollTrigger(trigger),
      scale: 0,
      autoAlpha: 0,
      duration: .5
    });
  };


  topHeadlineScrollTrigger(trigger: HTMLElement) {
    return {
      trigger: trigger,
      start: "top center+=400",
      end: "top center+=400",
      toggleActions: "restart none reverse none"
    }
  };


  setGsapUsedSkills(scrollTrigger: HTMLElement) {
    if (this.usedSkills) {
      const skills = this.usedSkills.nativeElement;
      gsap.set(skills, {
        scale: 0,
        autoAlpha: 0,
        skewX: 90,
      });
      if (this.isMobileView) {
        this.mobileUsedSkills(scrollTrigger, skills)
      } else {
        this.toGsapUsedSkills(scrollTrigger, skills)
      }
    }
  };


  toGsapUsedSkills(trigger: HTMLElement, item: HTMLElement) {
    gsap.to(item, {
      scrollTrigger: this.usedSkillsScrollTrigger(trigger),
      scale: 1,
      skewX: 0,
      autoAlpha: 1,
      duration: 2
    });
  };


  usedSkillsScrollTrigger(trigger: HTMLElement) {
    return {
      trigger: trigger,
      once: true,
      start: "top center+=400",
      end: "top center+=400",
      toggleActions: "restart none reverse none"
    }
  };

  mobileUsedSkills(trigger: HTMLElement, item: HTMLElement) {
    gsap.to(item, {
      scrollTrigger: this.mobileUsedSkillsScrollTrigger(trigger),
      scale: 1,
      skewX: 0,
      autoAlpha: 1,
      duration: 2
    });
  };


  mobileUsedSkillsScrollTrigger(trigger: HTMLElement) {
    return {
      trigger: trigger,
      once: true,
      start: "top center+=400",
      end: "top center+=400",
      toggleActions: "restart none reverse none"
    }
  };



  setGsapBoxHeadline(scrollTrigger: HTMLElement) {
    if (this.boxedSkillTitle) {
      const headline = this.boxedSkillTitle.nativeElement;
      gsap.set(headline, {
        scale: 0,
        autoAlpha: 0,
      });
      if (!this.isMobileView) {
        this.toGsapBoxHeadline(scrollTrigger, headline)
      }
    };
  };


  toGsapBoxHeadline(trigger: HTMLElement, item: HTMLElement) {
    gsap.to(item, {
      scrollTrigger: this.boxHeadlineScrollTrigger(trigger),
      scale: 1,
      autoAlpha: 1,
      duration: .5
    });
  };


  boxHeadlineScrollTrigger(trigger: HTMLElement) {
    return {
      trigger: trigger,
      start: "top center+=400",
      end: "top center+=400",
      toggleActions: "restart none reverse none"
    }
  };


  setGsapBoxText(scrollTrigger: HTMLElement) {
    if (this.skillTextContainer) {
      const content = this.skillTextContainer.nativeElement;
      const contentElements = content.querySelectorAll('.skill-content');
      gsap.set(contentElements, {
        autoAlpha: 0,
        yPercent: -100,
        xPercent: -150
      });
      if (this.isMobileView) {
        this.mobileTextAnimation(scrollTrigger, contentElements);
      } else {
        this.toGsapBoxText(scrollTrigger, contentElements);
      }
    }
  };


  toGsapBoxText(trigger: HTMLElement, item: NodeListOf<Element>) {
    gsap.to(item, {
      scrollTrigger: this.boxTextScrollTrigger(trigger),
      autoAlpha: 1,
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
  };


  boxTextScrollTrigger(trigger: HTMLElement) {
    return {
      trigger: trigger,
      once: true,
      start: "top center+=400",
      end: "top center+=400",
      toggleActions: "restart none none none"
    }
  };


  mobileTextAnimation(trigger: HTMLElement, item: NodeListOf<Element>) {
    gsap.to(item, {
      scrollTrigger: this.mobileTextScrollTrigger(trigger),
      autoAlpha: 1,
      yPercent: 0,
      xPercent: 0,
      duration: 1,
    });
  };


  mobileTextScrollTrigger(trigger: HTMLElement) {
    return {
      trigger: trigger,
      once: true,
      start: "top bottom-=100",
      end: "top bottom-=100",
      toggleActions: "restart none none none",
    }
  };
}