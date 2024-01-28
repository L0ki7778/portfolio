import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePictureComponent } from './about-me-picture.component';

describe('AboutMePictureComponent', () => {
  let component: AboutMePictureComponent;
  let fixture: ComponentFixture<AboutMePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMePictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
