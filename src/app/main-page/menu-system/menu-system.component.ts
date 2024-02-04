import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-system',
  standalone: true,
  imports: [],
  templateUrl: './menu-system.component.html',
  styleUrl: './menu-system.component.scss'
})
export class MenuSystemComponent {
  @Input() overlayStatus:string = 'hide-overlay'

}
