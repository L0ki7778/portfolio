import { Component } from '@angular/core';
import { MainPageStartComponent } from './main-page-start/main-page-start.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MainPageStartComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
