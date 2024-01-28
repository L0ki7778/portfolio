// import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

// @Directive({
//   selector: '[appIntersectionObserver]',
//   standalone: true
// })
// export class IntersectionObserverDirective implements OnDestroy, OnInit, AfterViewInit {
//   private observer: IntersectionObserver | undefined;
//   @Input debounceTime: number;
//   @Input threshold: number;
//   @Output visible = new EventEmitter<boolean>();


//   constructor(private elementRef: ElementRef) {
//     this.debounceTime = 0;;
//     this.threshold = 0.5;;
//   }

//   ngOnInit(): void {
//     this.observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         this.visible.emit(entry.isIntersecting)
//       })
//     })
//   }

// }
