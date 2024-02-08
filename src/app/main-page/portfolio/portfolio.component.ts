import { Component } from '@angular/core';
import { ProjectExampleComponent } from '../../project-example/project-example.component';
import Aos from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectExampleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor() {
    Aos.init();
  }
}
