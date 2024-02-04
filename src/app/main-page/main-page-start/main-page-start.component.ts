import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SelfieComponent } from './selfie/selfie.component';
import { ButtonComponent } from '../button/button.component';
import { SocialButtonsComponent } from '../social-buttons/social-buttons.component';
import { MenuSystemComponent } from '../menu-system/menu-system.component';

@Component({
  selector: 'app-main-page-start',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    SelfieComponent,
    ButtonComponent,
    SocialButtonsComponent,
    ],
  templateUrl: './main-page-start.component.html',
  styleUrl: './main-page-start.component.scss'
})
export class MainPageStartComponent {

}
