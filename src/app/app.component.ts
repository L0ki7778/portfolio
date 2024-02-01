import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import AOS from 'aos';
import { FooterComponent } from './main-page/footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    IntroComponent,
    MainPageComponent,
    HttpClientModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('git',
    this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/svg/git.svg"));
    AOS.init();
  }

  
  
}
