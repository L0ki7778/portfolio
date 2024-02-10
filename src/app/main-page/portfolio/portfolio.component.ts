import { Component } from '@angular/core';
import { ProjectExampleComponent } from '../../project-example/project-example.component';
import Aos from 'aos';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectExampleComponent,TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor() {
    Aos.init();
  }
}
