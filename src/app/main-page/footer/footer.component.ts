import { Component } from '@angular/core';
import { SocialButtonsComponent } from '../social-buttons/social-buttons.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialButtonsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
