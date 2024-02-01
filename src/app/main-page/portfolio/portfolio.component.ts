import { Component } from '@angular/core';
import { ProjectExampleComponent } from '../../project-example/project-example.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectExampleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
