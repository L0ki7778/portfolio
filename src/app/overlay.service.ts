import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  private triggerOverlayAction=new Subject<void>();
  overlayTriggered$ = this.triggerOverlayAction.asObservable();


  triggerOverlay() {
    this.triggerOverlayAction.next();
  }
}
