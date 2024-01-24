import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-selfie',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './selfie.component.html',
  styleUrl: './selfie.component.scss'
})
export class SelfieComponent {

}
