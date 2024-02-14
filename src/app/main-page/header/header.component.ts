import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { BurgerCrossAnimationComponent } from '../burger-cross-animation/burger-cross-animation.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { OverlayService } from '../../overlay.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BurgerCrossAnimationComponent, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  firstTime: boolean;
  @Input() imprint:string = "";
  @Output() dialogEvent = new EventEmitter<string>();


  constructor(private translateService: TranslateService,  overlayService: OverlayService) {
    this.firstTime = overlayService.firstTime
   }


  scrollToFragment(fragment: string): void {
    const element = document.querySelector(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  }
  

  switchLanguage() {
    if (this.translateService.currentLang == "de") {
      this.translateService.use('en');
    } else {
      this.translateService.use('de');
    }
  }


  manageOverlay(value: string) {
    this.dialogEvent.emit(value)
  }
}
