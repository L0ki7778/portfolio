import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeTextComponent } from './about-me-text.component';

describe('AboutMeTextComponent', () => {
  let component: AboutMeTextComponent;
  let fixture: ComponentFixture<AboutMeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
