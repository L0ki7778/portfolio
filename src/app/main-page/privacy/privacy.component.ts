import { Component } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  constructor(private translateService: TranslateService){
    
  }

  ngOnInit() {
    this.translateService.resetLang('de');
  }
}
