import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselV1 } from './carousel-v1';

describe('CarouselV1', () => {
  let component: CarouselV1;
  let fixture: ComponentFixture<CarouselV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselV1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
