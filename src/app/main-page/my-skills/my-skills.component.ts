import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import { TranslateModule } from '@ngx-translate/core';
import { OverlayService } from '../../overlay.service';


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
  overlayService = inject(OverlayService);
  isMobileView: boolean = false;
  firstTime: boolean;



  constructor() {
    this.firstTime = this.overlayService.firstTime
    this.isMobileView = window.innerWidth <= 1024 && window.innerHeight >= 1200 || window.innerWidth < 1024;
    gsap.registerPlugin(ScrollTrigger);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobileView = window.innerWidth <= 1024 && window.innerHeight >= 1200 || window.innerWidth < 1024;
  };


  ngAfterViewInit() {
    if(this.firstTime){
      setTimeout(() => {
        this.setUpAnimaion()
      }, 10000);
    }else{
      setTimeout(() => {
        this.setUpAnimaion()
      }, 500);
    }
  };
  

    /**
   * Set up animation for the SVG container and secondary skill title.
   */
  setUpAnimaion(){
    if (this.svgContainer && this.boxedSkillTitle) {
      const scrollTrigger = this.boxedSkillTitle.nativeElement;
      const container = this.svgContainer.nativeElement;
      gsap.to(container, { autoAlpha: 1, duration: 1 });
      this.setGsapItems(scrollTrigger, container);
    }
  }


  /**
   * Sets the GSAP items for the given scroll triggers.
   *
   * @param {HTMLElement} scrollTrigger - The scroll trigger for desktop view
   * @param {HTMLElement} mobileScrollTrigger - The scroll trigger for mobile view
   */
  setGsapItems(scrollTrigger: HTMLElement, mobileScrollTrigger: HTMLElement) {
    this.setGsapGrid(scrollTrigger, mobileScrollTrigger);
    this.setGsapTopHeadline(scrollTrigger);
    this.setGsapBoxHeadline(scrollTrigger);
    this.setGsapBoxText(scrollTrigger);
    this.setGsapUsedSkills(scrollTrigger);
  };


    /**
   * Set up GSAP grid-item animation for scroll triggers.
   *
   * @param {HTMLElement} scrollTrigger - the scroll trigger element
   * @param {HTMLElement} mobileScrollTrigger - the mobile scroll trigger element
   * @return {void} 
   */
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


    /**
   * Differ between viewscreens and set goal of animation.
   *
   * @param {HTMLElement} trigger - The element that triggers the animation.
   * @param {HTMLElement} mobileScrollTrigger - The mobile scroll trigger element.
   * @param {NodeListOf<Element>} item - The list of elements to animate.
   * @return {void} 
   */
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
        duration: .7,
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


    /**
   * A function that takes an HTMLElement as a trigger and returns an object with scroll trigger properties.
   *
   * @param {HTMLElement} trigger - the element that triggers the scroll
   * @return {object} an object with trigger, once, start, end, and toggleActions properties
   */
  gridScrollTrigger(trigger:HTMLElement){
    return{
      trigger: trigger,
      once: true,
      start: "top center+=400",
      end: "top center+=400",
      toggleActions: "restart none none none"
    }
  };


    /**
   * Animate the mobile icon with the given trigger and item list.
   *
   * @param {HTMLElement} trigger - the trigger element for the animation
   * @param {NodeListOf<Element>} item - the list of elements to be animated
   */
  mobileIconAnimation(trigger: HTMLElement, item: NodeListOf<Element>) {
    gsap.to(item, {
      scrollTrigger: this.mobileIconAnimationScrollTrigger(trigger),
      autoAlpha: 1,
      scale: 1,
      yPercent: 0,
      xPercent: 0,
      duration: .4,
      skewX: 0,
      skewY: 0,
      rotation: 0,
      transformOrigin: '50% 50%',
      stagger: {
        each: .07,
        from: "random",
        ease: "power1.in"
      }
    });
  };


    /**
   * A function that generates the scroll-trigger position/animation-counts.
   *
   * @param {HTMLElement} trigger - the HTML element that triggers the animation
   * @return {Object} the scroll trigger configuration object
   */
  mobileIconAnimationScrollTrigger(trigger: HTMLElement) {
    return {
      trigger: trigger,
      once: true,
      start: "top bottom-=100",
      end: "top bottom-=100",
      toggleActions: "restart none none none"
    }
  };
  

    /**
   * Set the top headline using GreenSock Animation Platform (GSAP) based on the scroll trigger and skill title element.
   *
   * @param {HTMLElement} scrollTrigger - The scroll trigger element
   */
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


    /**
   * animation-end-properties
   *
   * @param {HTMLElement} trigger - the element that triggers the animation
   * @param {HTMLElement} item - the element to be animated
   */
  toGsapTopHeadline(trigger: HTMLElement, item: HTMLElement) {
    gsap.to(item, {
      scrollTrigger: this.topHeadlineScrollTrigger(trigger),
      scale: 0,
      autoAlpha: 0,
      duration: .5
    });
  };

  /**
   * Following functions each serve the same purposes as previous gsap-functions abouve but 
   * for individual elements.
   *
   * @param {HTMLElement} trigger - the HTML element to use as the trigger
   * @return {object} an object containing the trigger, start, end, and toggleActions properties
   */
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
      duration: 0.7
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
      duration: 0.7
    });
  };


  mobileUsedSkillsScrollTrigger(trigger: HTMLElement) {
    return {
      trigger: trigger,
      once: true,
      start: "top center+=700",
      end: "top center+=700",
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
      duration: .7,
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
      duration: .7,
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