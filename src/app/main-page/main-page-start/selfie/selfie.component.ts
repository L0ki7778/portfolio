import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { ScrollDownComponent } from '../../../scroll-down/scroll-down.component';
import { SocialButtonsComponent } from '../../social-buttons/social-buttons.component';

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

  constructor(){
  }
ref(){
  document.getElementById('input-field')?.focus()
}
}
