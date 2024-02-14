import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MenuSystemComponent } from '../menu-system/menu-system.component';


@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    FooterComponent,
    HeaderComponent,
    MenuSystemComponent
  ],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  overlayStatus: string = 'hide-overlay';

  constructor(private translateService: TranslateService) { }
  switchLanguage() {
    if (this.translateService.currentLang == "de") {
      this.translateService.use('en');
    } else {
      this.translateService.use('de');
    }
  }


  handleOverlay(value: string) {
    this.overlayStatus = value;
  }
}
