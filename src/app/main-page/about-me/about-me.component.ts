import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { AboutMePictureComponent } from './about-me-picture/about-me-picture.component';
import { AboutMeTextComponent } from './about-me-text/about-me-text.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [AboutMePictureComponent, AboutMeTextComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @ViewChild('profileSvg') pSvg : ElementRef | undefined
  tl: gsap.core.Timeline

  constructor() {
    this.tl = gsap.timeline({
      defaults: {
        ease: 'power4.out',
        duration: 1.7
      }
    })
  }
  

  ngAfterViewInit(){
    if(this.pSvg){
      const svg = this.pSvg.nativeElement.querySelectorAll('.path'); //für angular ist das nativeElement wichtig, um zugriff für gsap zu erhalten
      console.log(this.pSvg.nativeElement.nodeName);
      for(let i = 0; i < svg.length; i++){
        console.log(`Letter ${i} totalLength: ${svg[i].getTotalLength()}`);
      }
    }
  }



}
