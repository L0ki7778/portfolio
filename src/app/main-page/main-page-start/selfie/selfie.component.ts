import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-selfie',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, ButtonComponent ],
  templateUrl: './selfie.component.html',
  styleUrl: './selfie.component.scss'
})
export class SelfieComponent {

}
