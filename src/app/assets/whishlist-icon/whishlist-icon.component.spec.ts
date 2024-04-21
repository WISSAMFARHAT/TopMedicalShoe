import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishlistIconComponent } from './whishlist-icon.component';

describe('WhishlistIconComponent', () => {
  let component: WhishlistIconComponent;
  let fixture: ComponentFixture<WhishlistIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhishlistIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhishlistIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
