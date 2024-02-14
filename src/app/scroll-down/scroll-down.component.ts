import { Component } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-scroll-down',
  standalone: true,
  imports: [],
  templateUrl: './scroll-down.component.html',
  styleUrl: './scroll-down.component.scss'
})
export class ScrollDownComponent {
  firstTime: boolean;
  constructor(overlayService: OverlayService) {
    this.firstTime = overlayService.firstTime
  }
}
