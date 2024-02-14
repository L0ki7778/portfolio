import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    TranslateModule,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(private translateService: TranslateService) {

  }

  switchLanguage() {
    if (this.translateService.currentLang == "de") {
      this.translateService.use('en');
    } else {
      this.translateService.use('de');
    }
  }

  ngOnInit() {
    if (this.translateService.currentLang == "de") {
      this.translateService.use('de');
    } else {
      this.translateService.use('en');
    }
  }
}
