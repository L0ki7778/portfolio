import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerCrossAnimationComponent } from './burger-cross-animation.component';

describe('BurgerCrossAnimationComponent', () => {
  let component: BurgerCrossAnimationComponent;
  let fixture: ComponentFixture<BurgerCrossAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerCrossAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BurgerCrossAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
