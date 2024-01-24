import { Component } from '@angular/core';
import { HeaderComponent } from './selfie/header/header.component';
import { SelfieComponent } from './selfie/selfie.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, SelfieComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
