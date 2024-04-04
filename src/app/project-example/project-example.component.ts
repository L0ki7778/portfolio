import { Component, HostListener, Input } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import Aos from 'aos';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-project-example',
  standalone: true,
  imports: [ MatButtonModule],
  templateUrl: './project-example.component.html',
  styleUrl: './project-example.component.scss'
})
export class ProjectExampleComponent {
  @Input() imgSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() skills: string = '';
  @Input() git: string = '';
  @Input() html: string = '';
  @Input() direction:string='';

  isMobileView: boolean = false;
  firstTime:boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobileView = window.innerWidth < 800;
  }
  
  constructor(overlayService: OverlayService) {
    this.firstTime=overlayService.firstTime;
    this.isMobileView = window.innerWidth < 800;
    Aos.init()
  }

  

}
