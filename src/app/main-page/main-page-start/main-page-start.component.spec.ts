import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageStartComponent } from './main-page-start.component';

describe('MainPageStartComponent', () => {
  let component: MainPageStartComponent;
  let fixture: ComponentFixture<MainPageStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
