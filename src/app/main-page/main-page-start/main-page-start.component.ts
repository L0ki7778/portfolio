import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SelfieComponent } from './selfie/selfie.component';

@Component({
  selector: 'app-main-page-start',
  standalone: true,
  imports: [HeaderComponent,MatButtonModule, MatDividerModule, MatIconModule, SelfieComponent],
  templateUrl: './main-page-start.component.html',
  styleUrl: './main-page-start.component.scss'
})
export class MainPageStartComponent {

}
