import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import Aos from 'aos';
import { PrivacyComponent } from './main-page/privacy/privacy.component';
import { OverlayService } from './overlay.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    IntroComponent,
    MainPageComponent,
    HttpClientModule,
    MatIconModule,
    TranslateModule,
    PrivacyComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';


  constructor(overlayService:OverlayService,
    public translate: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    setTimeout(()=>{
      overlayService.firstTime = false
    },8000);
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLanguage = translate.getBrowserLang();
    translate.use(browserLanguage?.match(/en|de/) ? browserLanguage : 'en');
    // this.matIconRegistry.addSvgIcon('git',
    // this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/svg/git.svg"));
    // Aos.init();
  }

}
