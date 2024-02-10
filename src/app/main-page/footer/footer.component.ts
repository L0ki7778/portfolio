import { Component } from '@angular/core';
import { SocialButtonsComponent } from '../social-buttons/social-buttons.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialButtonsComponent,TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
