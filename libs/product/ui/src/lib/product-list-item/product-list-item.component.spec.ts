import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductListItemComponent } from './product-list-item.component';

describe('ProductListItemComponent', () => {
  let component: ProductListItemComponent;
  let fixture: ComponentFixture<ProductListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListItemComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListItemComponent);
    component = fixture.componentInstance;
    component.productListItem = {
      urlImage: '/assets/images/products/product1.jpg',
      link: 'view.html',
      title: 'Guyer Chair',
      price: 45.0,
      oldPrice: 55.0,
      reviewsAverage: 5,
      reviewsNumber: 120,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
