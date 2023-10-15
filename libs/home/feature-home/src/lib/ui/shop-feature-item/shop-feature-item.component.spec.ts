import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopFeatureItemComponent } from './shop-feature-item.component';

describe('ShopFeatureItemComponent', () => {
  let component: ShopFeatureItemComponent;
  let fixture: ComponentFixture<ShopFeatureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopFeatureItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopFeatureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
