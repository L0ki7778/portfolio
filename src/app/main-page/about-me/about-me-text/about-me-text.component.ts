import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-about-me-text',
  standalone: true,
  imports: [],
  templateUrl: './about-me-text.component.html',
  styleUrl: './about-me-text.component.scss'
})
export class AboutMeTextComponent {

  constructor() { 
    Aos.init();

  }
  
  

}
