import { Component, EventEmitter, Output } from '@angular/core';
import { OverlayService } from '../../overlay.service';

@Component({
  selector: 'app-burger-cross-animation',
  standalone: true,
  imports: [],
  templateUrl: './burger-cross-animation.component.html',
  styleUrl: './burger-cross-animation.component.scss'
})
export class BurgerCrossAnimationComponent {
  open:string="closed";
  @Output() dialogEvent = new EventEmitter<string>();


  constructor(private overlayService: OverlayService){}


  ngOnInit(){
    this.overlayService.overlayTriggered$.subscribe(()=>{
      this.executeServiceMethod()
    })
  }


  manageOverlay(value:string){
    this.dialogEvent.emit(value)
  }

  openBurger(){
    if(this.open=="open"){
      this.open="closed";
      this.manageOverlay("hide-overlay")
    }else{
      this.open="open";
      this.manageOverlay("display-overlay")
    }
  }

  executeServiceMethod(){
    this.openBurger()
  }
}
