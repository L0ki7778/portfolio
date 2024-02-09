import { Component } from '@angular/core';
import Aos from 'aos';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-text',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me-text.component.html',
  styleUrl: './about-me-text.component.scss'
})
export class AboutMeTextComponent {

  constructor(private translateService: TranslateService) { 
    Aos.init();
  }

  switchLanguage(language: string) {
    this.translateService.use(language); 
  }
}
