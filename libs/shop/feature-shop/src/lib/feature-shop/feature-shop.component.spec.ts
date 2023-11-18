import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeatureShopComponent } from './feature-shop.component';

describe('FeatureShopComponent', () => {
  let component: FeatureShopComponent;
  let fixture: ComponentFixture<FeatureShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureShopComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
