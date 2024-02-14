import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { ScrollDownComponent } from '../../../scroll-down/scroll-down.component';
import { SocialButtonsComponent } from '../../social-buttons/social-buttons.component';
import { OverlayService } from '../../../overlay.service';

@Component({
  selector: 'app-selfie',
  standalone: true,
  imports: [
    ButtonComponent,
    ScrollDownComponent,
    SocialButtonsComponent
  ],
  templateUrl: './selfie.component.html',
  styleUrl: './selfie.component.scss'
})
export class SelfieComponent {
firstTime: boolean;
  constructor(overlayService : OverlayService) {
    this.firstTime = overlayService.firstTime
  }
ref(){
  document.getElementById('input-field')?.focus()
}
}
