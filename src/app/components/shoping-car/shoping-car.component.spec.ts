import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCarComponent } from './shoping-car.component';

describe('ShopingCarComponent', () => {
  let component: ShopingCarComponent;
  let fixture: ComponentFixture<ShopingCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
