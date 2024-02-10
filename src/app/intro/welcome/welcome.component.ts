import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  @ViewChild('text', { static: true }) textElement?: ElementRef = this.textElement?.nativeElement.getElementById('text');
  text = 'Welcome to the portfolio of...';
  index = 0;

  constructor() {

  }

  ngAfterViewInit() {
    this.typeText();
  }

  typeText() {
    let timestamp = new Date().getSeconds();
    setTimeout(() => {      
      if (this.textElement) {
        const element = this.textElement.nativeElement;
        const interval = setInterval(() => {
          element.textContent += this.text[this.index];
          if (this.index === this.text.length - 1) {
            let timepassed = new Date().getSeconds() - timestamp;
            clearInterval(interval);
          }
          this.index++;
        }, 50);
      }
    }, 1500);
    }
}

