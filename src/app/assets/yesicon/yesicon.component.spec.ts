import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesiconComponent } from './yesicon.component';

describe('YesiconComponent', () => {
  let component: YesiconComponent;
  let fixture: ComponentFixture<YesiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YesiconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YesiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
