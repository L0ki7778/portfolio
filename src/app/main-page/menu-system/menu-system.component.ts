import { Component, Input } from '@angular/core';
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

  constructor(private manageOverlay: OverlayService, private translateService: TranslateService) {  
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
