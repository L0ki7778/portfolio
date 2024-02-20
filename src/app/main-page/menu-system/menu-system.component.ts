import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { OverlayService } from '../../overlay.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-system',
  standalone: true,
  imports: [TranslateModule,RouterLink],
  templateUrl: './menu-system.component.html',
  styleUrl: './menu-system.component.scss'
})

export class MenuSystemComponent {
  @Input() overlayStatus: string = 'hide-overlay';
  @Input() secondary:string = '';
  @ViewChild('menuSystem') menuSystem: ElementRef<HTMLDivElement> | undefined;
  isMobileView : boolean;
  noLandscape : boolean;

  constructor(private manageOverlay: OverlayService, private translateService: TranslateService) {  
    this.isMobileView = window.innerWidth <= 1024 && window.innerHeight >= 1200 || window.innerWidth < 1024;
    this.noLandscape = window.innerWidth / window.innerHeight < 1;
  }

  
  ngAfterViewInit() {
    this.isMobileView = window.innerWidth <= 1024 && window.innerHeight >= 1200 || window.innerWidth < 1024;
    this.noLandscape = window.innerWidth / window.innerHeight < 1;
    this.resizeMenu()
   }


   @HostListener('window:resize', ['$event'])
   onResize(event: Event) {
     this.isMobileView = window.innerWidth <= 1024 && window.innerHeight >= 1200 || window.innerWidth < 1024;
     this.noLandscape = window.innerWidth / window.innerHeight < 1;
     this.resizeMenu()
   };

   resizeMenu(){
    if(this.menuSystem){
      if(this.isMobileView && this.noLandscape){
        this.menuSystem.nativeElement.style.height = '92dvh';
      }else{
        this.menuSystem.nativeElement.style.height = '';
      }
    }
   }


  changeLanguage() {
    if (this.translateService.currentLang == 'en') {
      this.translateService.use('de');
    } else {
      this.translateService.use('en');
    }
  }


  scrollToFragment(fragment: string): void {
    const element = document.querySelector(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  }


  handleOverlay() {
    this.manageOverlay.triggerOverlay()
  }
}
