import { Component, Input } from '@angular/core';
import { OverlayService } from '../../overlay.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-system',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './menu-system.component.html',
  styleUrl: './menu-system.component.scss'
})
export class MenuSystemComponent {
  @Input() overlayStatus: string = 'hide-overlay'

  constructor(private manageOverlay: OverlayService, private translateService: TranslateService) {  
   }
  changeLanguage() {
    if (this.translateService.currentLang == 'en') {
      this.translateService.use('de');
    } else {
      this.translateService.use('en');
    }
  }

  handleOverlay() {
    this.manageOverlay.triggerOverlay()
  }
}
