import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { ScrollDownComponent } from '../../../scroll-down/scroll-down.component';
import { SocialButtonsComponent } from '../../social-buttons/social-buttons.component';
import { OverlayService } from '../../../overlay.service';

@Component({
  selector: 'app-selfie',
  standalone: true,
  imports: [
    ButtonComponent,
    ScrollDownComponent,
    SocialButtonsComponent
  ],
  templateUrl: './selfie.component.html',
  styleUrl: './selfie.component.scss'
})
export class SelfieComponent {
  @ViewChild('profilePicture') profilePicture: ElementRef<HTMLImageElement> | undefined;
  @ViewChild('rightSection') rightSection: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('leftSection') leftSection: ElementRef<HTMLDivElement> | undefined;
  firstTime: boolean;
  initialInnerWidth: number;
  overlayService = inject(OverlayService);
  isMobileView = window.innerWidth <= 1024 && window.innerHeight >= 1200 || window.innerWidth < 1024;
  noLandscape = window.innerWidth / window.innerHeight < 1;


  constructor() {
    this.firstTime = this.overlayService.firstTime;
    this.initialInnerWidth = window.innerWidth;
    this.isMobileView = window.innerWidth <= 1024 && window.innerHeight >= 1200 || window.innerWidth < 1024;
  }


  ngAfterViewInit() {
    this.updateProfilePicture();
    this.responsiveRightSection();
    this.mobileLandscape();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobileView = window.innerWidth <= 1024 && window.innerHeight >= 1200 || window.innerWidth < 1024;
    this.noLandscape = window.innerWidth / window.innerHeight < 1;
    this.cutAnimation();
    this.updateProfilePicture();
    this.responsiveRightSection();
    this.mobileLandscape();
  };


  updateProfilePicture() {
    if (this.isMobileView && this.profilePicture && this.noLandscape) {
      this.profilePicture.nativeElement.srcset = "/assets/img/myself/showDown.png"
    } else {
      if (!this.noLandscape && this.profilePicture){
        this.profilePicture.nativeElement.srcset = "/assets/img/myself/showRight.png"
      }
    }
  }


  mobileLandscape() {
    if (this.leftSection && this.rightSection) {
      if (!this.isMobileView || this.isMobileView && this.noLandscape) {
        if (this.leftSection.nativeElement.classList.contains("landscape")) {
          this.leftSection.nativeElement.classList.remove("landscape");
          this.rightSection.nativeElement.classList.remove('right-section-landscape')
        }
      } else {
        this.leftSection.nativeElement.classList.add("landscape");
        this.rightSection.nativeElement.classList.add('right-section-landscape')
      }
    }
  }


  responsiveRightSection() {
    if (this.rightSection) {
      if (window.innerWidth / window.innerHeight >= 1.5) {
        this.rightSection.nativeElement.style.transform = 'translate(-15%,-15%)'
      } else {
        this.rightSection.nativeElement.style.transform = "";
      };
    }
  }


  cutAnimation() {
    if (window.innerWidth !== this.initialInnerWidth) {
      let element = document.getElementById('i-am');
      if (element && element.classList.contains("i-am-animation")) {
        this.setFastAnimation(element)
      } else {
        return
      }
    }
  }


  setFastAnimation(element: HTMLElement) {
    element.classList.remove("i-am-animation");
    element.classList.add('i-am-fast')
  }

  ref() {
    document.getElementById('input-field')?.focus()
  }
}
