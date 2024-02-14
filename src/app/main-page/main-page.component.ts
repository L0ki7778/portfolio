import { Component } from '@angular/core';
import { MainPageStartComponent } from './main-page-start/main-page-start.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MenuSystemComponent } from './menu-system/menu-system.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from '../intro/intro.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    MenuSystemComponent,
    MainPageStartComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    IntroComponent,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  overlayStatus: string = 'hide-overlay';
  firstTime: boolean;

  constructor(overlayService : OverlayService) {
    this.firstTime= overlayService.firstTime;
    console.log(this.firstTime);
    setTimeout(()=>{
      overlayService.firstTime = false
    },8000)
  }
  


  handleOverlay(value: string) {
    this.overlayStatus = value;
  }
}
