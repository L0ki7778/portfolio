import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MenuSystemComponent } from '../menu-system/menu-system.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    TranslateModule,
    FooterComponent,
    HeaderComponent,
    MenuSystemComponent
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
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


  ngOnInit() {
    if (this.translateService.currentLang == "de") {
      this.translateService.use('de');
    } else {
      this.translateService.use('en');
    }
  }
}
