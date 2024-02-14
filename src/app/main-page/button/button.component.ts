import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text:string = "";
  
  @Output() refEvent = new EventEmitter<void>();

  constructor() { }

  triggerRef() {
    this.refEvent.emit();
  }

  scrollTo(fragment: string): void {
    const element = document.querySelector(fragment);
      if (element && element instanceof HTMLElement) {
        element.focus();
      }
  }
}
