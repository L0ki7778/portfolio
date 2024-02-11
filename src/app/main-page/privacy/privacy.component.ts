import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  constructor(private translateService: TranslateService) {

  }

  ngOnInit() {
    this.translateService.resetLang('de');
  }
}
