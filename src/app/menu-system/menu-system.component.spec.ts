import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSystemComponent } from './menu-system.component';

describe('MenuSystemComponent', () => {
  let component: MenuSystemComponent;
  let fixture: ComponentFixture<MenuSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
