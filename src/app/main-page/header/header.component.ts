import { Component, EventEmitter, Output } from '@angular/core';
import { BurgerCrossAnimationComponent } from '../burger-cross-animation/burger-cross-animation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BurgerCrossAnimationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Output() dialogEvent = new EventEmitter<string>();


manageOverlay(value:string){
  this.dialogEvent.emit(value)
}
}
