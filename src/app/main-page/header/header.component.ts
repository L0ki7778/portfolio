import { Component, EventEmitter, Output } from '@angular/core';
import { BurgerCrossAnimationComponent } from '../burger-cross-animation/burger-cross-animation.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BurgerCrossAnimationComponent,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
@Output() dialogEvent = new EventEmitter<string>();
currentLanguage:string="";

constructor(private translateService: TranslateService){
  this.currentLanguage = "EN"
}

switchLanguage() {
  if(this.currentLanguage=="DE"){
    this.translateService.use('en'); 
  }else{
    this.translateService.use('de'); 
  }
}


manageOverlay(value:string){
  this.dialogEvent.emit(value)
}
}
