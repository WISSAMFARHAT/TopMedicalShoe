import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhangePolicyComponent } from './exhange-policy.component';

describe('ExhangePolicyComponent', () => {
  let component: ExhangePolicyComponent;
  let fixture: ComponentFixture<ExhangePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExhangePolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExhangePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
